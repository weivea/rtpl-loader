'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _plugin = require('./plugin');

var plugin = _interopRequireWildcard(_plugin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function render(opt) {
  var data = opt.data;return;

  '  <div>\n      <span>' + data.a + '</span><span>' + data.b + '</span>\n      <div>' + plugin.add(1, 2) + '</div>\n      ' + subrtpl.render({
    data: data
  }) + '\n    </div>';
};
