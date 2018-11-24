const { readGridSize, createGrid } = require('./grid')
const { readRobotData } = require('./robot')

function main(inputLines) {
  const [MAX_X, MAX_Y] = readGridSize(inputLines.shift())
  const robots = readRobotData(inputLines)

  const grid = createGrid(MAX_X, MAX_Y)

  return {
    grid: { width: MAX_X, height: MAX_Y },
    robots
  }
}

module.exports = main