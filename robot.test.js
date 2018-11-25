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

  test('parses command string and orientation to upper case', () => {
    const mockData = [ '1 1 e', 'rfrfrfrf' ]
    
    const result = readRobotData(mockData)
  
    expect(result.length).toBe(1)
    expect(result[0].x).toBe(1)
    expect(result[0].y).toBe(1)
    expect(result[0].orientation).toBe('E')
    expect(result[0].commandQueue).toEqual('RFRFRFRF'.split(''))
    expect(result[0].isLost).toBe(false)
  })
})