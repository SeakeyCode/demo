const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

// const data = fs.readFileSync('test.js')

// console.log(data.toString())

// fs.readFile('test.js', (err, data) => {
//   console.log(data.toString())
// })

process.nextTick(async () => {
  const data = await readFile('test.js')
  console.log(data.toString())
})
