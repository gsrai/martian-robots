function main(inputString, inputLength) {
  let currentLine = 0
  const readLine = function () {
    return inputString[currentLine++]
  }
  console.log('first line', readLine())
}

module.exports = main