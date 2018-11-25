function parsePosition(str) {
  const parts = str.split(' ')
  const x = parseInt(parts[0])
  const y = parseInt(parts[1])
  const orientation = parts[2].toUpperCase()
  return { x, y, orientation }
}

function readRobotData(lines) {
  const robots = []
  while (lines.length > 0) {
    const positionString = lines.shift()
    const commandString = lines.shift().toUpperCase()
    const parsedPosition = parsePosition(positionString)
    const r = robotFactory(parsedPosition.x, parsedPosition.y, parsedPosition.orientation, commandString)
    robots.push(r)
  }
  return robots
}

function robotFactory(x, y, orientation, commands) {
  return {
    x, y, orientation,
    commandQueue: commands.split(''),
    isLost: false
  }
}

module.exports = { readRobotData }