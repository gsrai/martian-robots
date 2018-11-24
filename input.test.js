const mockStdin = require('mock-stdin').stdin()
const inputReader = require('./input')

test('reads stdin correctly by passing input and size to callback', (done) => {
  const str = 'foobar'

  inputReader((inputStr) => {
    expect(inputStr).toEqual([str])
    done()
  })

  mockStdin.send(str)
  mockStdin.end()
})