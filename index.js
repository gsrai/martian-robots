const inputReader = require('./input')
const { main } = require('./main')

function init() {
  console.log('Please enter input, press CTRL + D to end input >>>')
  inputReader(main)
}

init()