const { EventEmitter } = require('events')

const emitter = new EventEmitter()
emitter.on('some', () => {
  console.log(11111)
})
emitter.on('some', () => {
  console.log(2222)
})

setTimeout(() => {
  emitter.emit('some')
}, 2000)
