module.exports  = function(src){
  var scripts = [];
  src = src.replace(/<script.*>([\s\S]*)<\/script>/gm, function(match, inner){
    scripts.push(inner);
    return '';
  })
  src = src.replace(/[\n\s]{0,}<[/]{0,1}template>[\n]{0,1}/g, '`')
  src = src.replace(/[\s]{2,}/g, ' ')
  const funStr = scripts.join('\n')+'\nfunction render( opt ) {var data = opt.data; return ' + src + '}; export {render}';
  console.log(funStr);
  console.log('-----------------------');
  return funStr;
}