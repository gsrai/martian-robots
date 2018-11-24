const fs = require('fs')

function inputReader(cb) {
  process.stdin.resume()
  process.stdin.setEncoding('utf-8')

  let inputString = ''

  process.stdin.on('data', inputStdin => {
    inputString += inputStdin
  })

  process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim())
    cb(inputString)
  })
}

module.exports = inputReader