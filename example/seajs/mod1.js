define(function (require, exports, module) {
  // require // 引入其他模块
  // exports.a = 10 // 单个导出
  // module.exports  // 批量导出
  let modl3 = require('mod3.js')
  module.exports = {
    a: 12,
    b: 5,
    c: modl3
  }
});