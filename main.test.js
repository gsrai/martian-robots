const main = require('./main')

test('parses input lines to get grid dimensions and create robot objects', () => {
  const mockData = [
    '5 3',
    '1 1 E',
    'RFRFRFRF'
  ]
  
  const result = main(mockData)
  expect(result.grid.width).toBe(5)
  expect(result.grid.height).toBe(3)

  expect(result.robots.length).toBe(1)
  expect(result.robots[0].x).toBe(1)
  expect(result.robots[0].y).toBe(1)
  expect(result.robots[0].orientation).toBe('E')
  expect(result.robots[0].commandQueue).toEqual('RFRFRFRF'.split(''))
  expect(result.robots[0].isLost).toBe(false)
})