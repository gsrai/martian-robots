const mockStdin = require('mock-stdin').stdin()
const inputReader = require('./input')

test('reads stdin correctly by passing input and size to callback', (done) => {
  const str = 'foobar'

  inputReader((inputStr, len) => {
    expect(inputStr).toEqual([str])
    expect(len).toBe(1)
    done()
  })

  mockStdin.send(str)
  mockStdin.end()
})