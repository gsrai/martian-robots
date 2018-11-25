const { main, calcFinalPosition } = require('./main')

test('parses input lines and calculates final position of robots', () => {
  const mockData = [
    '5 3',
    '1 1 E',
    'RFRFRFRF'
  ]
  
  const expectedOutput = '1 1 E'

  const result = main(mockData)

  expect(result.length).toBe(1)
  expect(result[0]).toBe(expectedOutput)
})

test('correctly checks out of bounds and sets robot to lost', () => {
  const mockData = [
    '5 3',
    '3 2 N',
    'FRRFLLFFRRFLL'
  ]
  
  const expectedOutput = '3 3 N LOST'

  const result = main(mockData)

  expect(result.length).toBe(1)
  expect(result[0]).toBe(expectedOutput)
})

test('correctly finds scent of previous robot and ignores offworld move', () => {
  const mockData = [
    '5 3',
    '3 2 N',
    'FRRFLLFFRRFLL',
    '0 3 W',
    'LLFFFLFLFL'
  ]
  
  const expectedLine1 = '3 3 N LOST'
  const expectedLine2 = '2 3 S'

  const result = main(mockData)

  expect(result.length).toBe(2)
  expect(result[0]).toBe(expectedLine1)
  expect(result[1]).toBe(expectedLine2)
})

test('catches error thrown when grid input line is invalid', () => {
  const exit = jest.spyOn(process, 'exit').mockImplementation(n => n)
  const mockData = ['foo 3 5']
  main(mockData)
  expect(exit).toHaveBeenCalled()
})