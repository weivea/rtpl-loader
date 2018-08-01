var template = require('./index.rtpl');

var html = template.render({
  data: {
    a: 1,
    b: 2
  }
});

console.log(html);

document.body.innerHTML = html;
