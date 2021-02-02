class SetReadmeWebpackPlugin {
  constructor(options) {
    this.name = options.name || 'hello world'
  }

  apply(compiler) {
    compiler.hooks.emit.tap('SetReadmeWebpackPlugin', (compilation) => {
      compilation.assets['readme.txt'] = {
        source: () => this.name,
        size: () => 20,
      }
    })
  }
}

module.exports = SetReadmeWebpackPlugin
