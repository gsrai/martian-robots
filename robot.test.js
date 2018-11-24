const { readRobotData } = require('./robot')

describe('Robot functionality', () => {
  test('parses input lines to create robot objects', () => {
    const mockData = [ '1 1 E', 'RFRFRFRF' ]
    
    const result = readRobotData(mockData)
  
    expect(result.length).toBe(1)
    expect(result[0].x).toBe(1)
    expect(result[0].y).toBe(1)
    expect(result[0].orientation).toBe('E')
    expect(result[0].commandQueue).toEqual('RFRFRFRF'.split(''))
    expect(result[0].isLost).toBe(false)
  })
})