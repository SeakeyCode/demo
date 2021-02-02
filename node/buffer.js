// Buffer 组合数据
const bf1 = Buffer.from('s')
const bf2 = Buffer.from('都是')
const bf3 = Buffer.concat([bf1, bf2])
console.log(bf3.toString())
