const babylon = require('babylon')
const traverse = require('@babel/traverse')

const code = `const text = 'hellow 111'`

const ast = babylon.parse(code)

traverse(ast, {
    enter(path) {
      console.log(path)
    }
  });

// console.log(ast)