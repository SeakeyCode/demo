const fs = require('fs')
const path = require('path')
const util = require('util')
const OSS = require('ali-oss')
const inquirer = require('inquirer')

const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

const ALIOSSKEY = {
  region: 'xxx',
  key: 'xxx',
  secret: 'xxx',
  bucket: 'xxxx',
}

const client = new OSS({
  region: ALIOSSKEY.region,
  accessKeyId: ALIOSSKEY.key,
  accessKeySecret: ALIOSSKEY.secret,
  bucket: ALIOSSKEY.bucket,
})

const publicPath = path.resolve(__dirname, './build')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'choicesItem',
      message: '是否开始上传打包后的文件到oss',
      choices: ['yes', 'no'],
    },
  ])
  .then((res) => {
    if (res.choicesItem === 'yes') run()
  })
  .catch(() => {})

async function run(proPath = '') {
  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(
      path.resolve(`${publicPath}${proPath}`, dir[i])
    )
    if (stat.isFile()) {
      const fileStream = fs.createReadStream(
        path.resolve(`${publicPath}${proPath}`, dir[i])
      )
      if (/\.(exe|yml)$/.test(dir[i])) {
        console.log(`上传文件: ${proPath}/${dir[i]}`)
        if (process.argv.includes('--alpha')) {
          await client.putStream(`/effie-alpha/${dir[i]}`, fileStream)
        } else {
          await client.putStream(`/effie/${dir[i]}`, fileStream)
        }
      }
    }
  }
}
