const { readGridSize, createGrid } = require('./grid')

test('parses input lines to get grid dimensions', () => {
  const mockData = '5 3'
  const result = readGridSize(mockData)
  expect(result[0]).toBe(5)
  expect(result[1]).toBe(3)
})

test('exits and logs error when incorrect grid coordinates are passed', () => {
  const mockData = '3'
  expect(_ => readGridSize(mockData)).toThrow()
})

describe('Grid functionality', () => {
  const grid = createGrid(3, 3)

  test('grid checks out of bounds', () => {
    expect(grid.isOutOfBounds(5, 5)).toBe(true)
    expect(grid.isOutOfBounds(2, 1)).toBe(false)
  })

  test('grid checks getting and setting of scent', () => {
    grid.addScent(3, 3)
    expect(grid.checkScent(2, 1)).toBe(false)
    expect(grid.checkScent(3, 3)).toBe(true)
  })
})