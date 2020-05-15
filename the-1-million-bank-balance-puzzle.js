// eslint-disable-next-line no-unused-vars
const { PerformanceObserver, performance } = require('perf_hooks')
var t0 = performance.now()

const target = 1000000
var ledger
var balance
var solution = [1000000, 1000000, 1]
var solutionStr = ''

for (let y0 = 0; y0 < solution[0] + solution[1]; y0++) {
  for (let y1 = 0; y1 <= solution[0] + solution[1]; y1++) {
    if (y0 === 0 & y1 === 0) continue

    ledger = [y1 + y0, y0]
    balance = ledger[0]

    while (balance < target) {
      ledger.unshift(ledger[0] + ledger[1])
      balance = ledger[0]
    }
    if (balance === target) {
      if (ledger.length > solution[2]) {
        solution = [y0, y1, ledger.length]

        console.log('new solution: y0 = ' + y0 + ', y1 = ' + y1 + ', n = ' + ledger.length)
        solutionStr = '' + ledger[ledger.length - 1]
        for (let i = ledger.length - 2; i >= 0; i--) {
          solutionStr += ', ' + ledger[i]
        }
        console.log(solutionStr)
      }
    }
  }
}

var t1 = performance.now()

console.log('\n' + 'Solution: ')

console.log('y0 = ' + solution[0] + ', y1 = ' + solution[1] + ', n = ' + solution[2])

console.log(solutionStr)
console.log('Solution computed in ' + Math.round(t1 - t0) + ' milliseconds.')
