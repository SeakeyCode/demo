const loaderUtils = require('loader-utils') // 引入loader提供的util工具插件
const fs = require('fs') // 引入fs文件系统

module.exports = function (source) {
  console.log(source)
  // 获取options参数，object类型
  let option = loaderUtils.getOptions(this)
  console.log(option)
  // 创建写入流
  let writeStream = fs.createWriteStream('result.txt')
  // 写入源代码
  writeStream.write(source, 'UTF-8')
  // 标记结束
  writeStream.end()
  // 写入完成回调
  writeStream.on('finish', () => {
    console.log('写入完成')
  })
  return source
}
