const gm = require('gm')

gm('./pay-money.png')
  .resize(150, 150)
  .options({
    imageMagick: true,
  })
  .write('./pay-money123456.png', (err) => {
    if (err) return
    return console.log('success')
  })
