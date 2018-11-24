function parsePosition(str) {
  const parts = str.split(' ')
  const x = parseInt(parts[0]) // validate here?
  const y = parseInt(parts[1])
  const orientation = parts[2] // use deconstruction?
  return { x, y, orientation }
}

// TODO: validation of input
function readRobotData(lines) {
  const robots = []
  while (lines.length > 0) {
    const positionString = lines.shift()
    const commandString = lines.shift()
    const parsedPosition = parsePosition(positionString)
    const r = robotFactory(parsedPosition.x, parsedPosition.y, parsedPosition.orientation, commandString)
    robots.push(r)
  }
  return robots
}

// move '' literal to constant, error checking? constraint validation?
// make commands all upcase
function robotFactory(x, y, orientation, commands) {
  return {
    x, y, orientation,
    commandQueue: commands.split(''),
    isLost: false
  }
}

module.exports = { readRobotData }