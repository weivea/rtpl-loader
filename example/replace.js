var path = require('path');
var fs = require('fs');


var src = fs.readFileSync(path.join(__dirname, 'index.template')).toString();
var r = /<script>[\s\S]*<\/script>/gm.test(src);
console.log(r);
var src = src.replace(/<script.*>([\s\S]*)<\/script>/gm, function(match, inner){

  return `/*${match}*/`;
})
src = src.replace(/<[/]{0,1}template>/g, '`')
console.log(src);