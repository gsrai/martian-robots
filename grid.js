// should this be a singleton? validate x/y constraint being 50
function createGrid(width, height) {
  const map = {}
  const grid = {}
  
  const createKey = (x, y) => `${x}-${y}`

  grid.addScent = (x, y) => {
    const key = createKey(x, y)
    map[key] = true
  }

  grid.checkScent = (x, y) => {
    const key = createKey(x, y)
    return map.hasOwnProperty(key)
  }

  grid.isOutOfBounds = (x, y) => {
    return x < 0 || y < 0 || x > width || y > height
  }

  return grid
}

function readGridSize(str) {
  const coordinates = str.split(' ').map(s => parseInt(s, 10))
  if (coordinates.length != 2) {
    console.error('Invalid input, require size of grid as two coordinates: x y')
    process.exit()
    // TODO: add better error handling
  }
  return coordinates
}

module.exports = { createGrid, readGridSize }