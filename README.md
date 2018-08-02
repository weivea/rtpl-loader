# rtpl-loader
一个webpack loader, 传入tpl模板文件，输出js,

像写es6一样写html~~~


## install 

```shell
npm install rtpl-loader --save-dev
```

## usage
通过`['babel-loader', 'rtpl-loader']`,rtpl模板文件被编译成为一个对象，拥有一个render方法

### js调用;
```javascript
var template = require('./index.rtpl');
var pageData = {
  // 渲染数据
}
var html = template.render({
  data: pageData
});
```
### 模板语法
模板分为 `script` 和 `template` 两部分, `template` 下的 `${}`里的表达式可以使用 `script` 中 定义 或者 `import` 的变量，具体见示例

```html
<script>
  import * as subrtpl from './index-sub.rtpl';
  var a = 1;
  var data = {
    b: 2
  }
  // js
</script>
<template>
  <!-- 参杂模板字符串语法的html -->
  ${subrtpl.render({data})
  <div>
    ${a}
  </div>
</template>
```

### 示例

// webpack.config.js
```javascript
var path = require('path');
module.exports = {
  //...
  entry: {
    "index": path.resolve(__dirname, 'index.js')
  },
  // devtool: "eval-source-map",
  output: {
    filename: 'bundle.js',
    auxiliaryComment: 'mi app store Comment'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.rtpl$/,
        use: ['babel-loader', 'rtpl-loader']
      },
      // .....其它loader
    ]
  }
};
```


// index.js
```javascript
var template = require('./index.rtpl');

document.body.innerHTML = template.render({
  data: {
    a: 1,
    b: 2
  }
});

template.init();
```



```html
<!-- index.rtpl -->
<script>
  import './index.less';
  import * as subrtpl from './index-sub.rtpl';
  import * as plugin from './plugin';
  var list = [1,2,3]
  export function init() {
    var btn = document.querySelector('.click');
    btn.addEventListener('click', (e)=> {
      alert(e.target.innerHTML);
    });
  }
</script>
<template>
  <div>
    <span>${data.a}</span><span>${data.b}</span>
    <div class="click">${plugin.add(1,2)}点我呀</div>
    ${
      subrtpl.render({
        data
      })
    }
    ${
      list.map(function(item){
        return <template>
          <div>${item}</div>
        </template>
      }).join('\n')
    }
  </div>
</template>

<!-- index-sub.rtpl -->
<template>
  <ul>
      <li>${data.a}</li>
      <li>${data.b}</li>
  </ul>
</template>
```

### 高级用法

