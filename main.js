const { readGridSize, createGrid } = require('./grid')
const { readRobotData } = require('./robot')

function calcFinalPosition(robot, grid) {
  while (robot.commandQueue.length !== 0) {
    const command = robot.commandQueue.shift()
    const newPosition = moveRobot(robot.x, robot.y, robot.orientation, command)
    const isOffWorld = grid.isOutOfBounds(newPosition.x, newPosition.y)

    if (command === 'F' && grid.checkScent(robot.x, robot.y) && isOffWorld) continue
    
    if (grid.isOutOfBounds(newPosition.x, newPosition.y)) {
      grid.addScent(robot.x, robot.y)
      robot.isLost = true
    }

    Object.assign(robot, newPosition)
  }
  return `${robot.x} ${robot.y} ${robot.orientation}${(robot.isLost) ? ' LOST' : ''}`
}

function moveRobot(x, y, orientation, command) {
  const newPosition = { x, y, orientation }
  switch (command) {
    case 'L':
      newPosition.orientation = changeOrientation(orientation, LEFT)
      break
    case 'R':
      newPosition.orientation = changeOrientation(orientation, RIGHT)
      break
    case 'F':
      const [newX, newY] = changeCoordinates(x, y, orientation)
      newPosition.x = newX
      newPosition.y = newY
      break
    default:
      console.error('ERROR: Unsupported command type: ', command)
  }
  return newPosition
}

const LEFT = -1
const RIGHT = 1

const changeOrientation = (currentOrientation, dir) => {
  const ORIENTATIONS = 'NESW'
  const currentOrientationIdx = ORIENTATIONS.indexOf(currentOrientation)
  const newOrientationIdx = (currentOrientationIdx + dir + 4) % 4
  return ORIENTATIONS[newOrientationIdx]
}

function changeCoordinates(x, y, orientation) {
  switch (orientation) {
    case 'N':
      return [x, y + 1]
    case 'E':
      return [x + 1, y]
    case 'S':
      return [x, y - 1]
    case 'W':
      return [x - 1, y]
  }
}

function main(inputLines) {
  let width = 0
  let height = 0
  try {
    const [MAX_X, MAX_Y] = readGridSize(inputLines.shift())
    width = MAX_X
    height = MAX_Y
  } catch(e) {
    logAndExit(e.message)
  }

  const robots = readRobotData(inputLines)
  const grid = createGrid(width, height)

  const results = robots.map(robot => calcFinalPosition(robot, grid))

  console.log('-'.repeat(15), 'Results:', '-'.repeat(15))
  results.forEach(res => console.log(res))
  return results
}

function logAndExit(msg) {
  console.error(msg)
  process.exit()
}

module.exports = { main, calcFinalPosition }