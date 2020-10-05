// PRIME PAIRS PUZZLE - MPMP15

const numberOfNumbers = 9
const numberOfSummands = 2

// eslint-disable-next-line no-unused-vars
const { PerformanceObserver, performance } = require('perf_hooks')
var t0 = performance.now()

var state = {
  numberOfNumbers: numberOfNumbers,
  numberOfSummands: numberOfSummands,
  numberReserve: getNumbers(numberOfNumbers),
  primes: getPrimes(sumtorial(numberOfNumbers, numberOfSummands)),
  numberLine: [],
  solutions: []
}

function getNumbers (amount) {
  var numbers = []

  for (let i = 1; i <= amount; i++) {
    numbers.push(i)
  }

  return numbers
}

function sumtorial (num, n) {
  var sum = 0
  for (let i = 0; i < n; i++) sum += num - i
  return sum
}

function isPrime (num, primes) {
  if (primes.find(num)) {
    return true
  }
  return false
}

function isPrime (num) {
  for (var i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false
  return num > 1
}

function getPrimes (max) {
  primes = []
  for (let i = 2; i <= max; i++) if (isPrime(i)) primes.push(i)
  return primes
}

function checkUniqueSolution (state) {
  let line = [...state.numberLine]
  line.reverse()
  for (let i = 0; i < state.solutions.length; i++) {
    for (let j = 0; j < line.length; j++) {
      if (state.solutions[i][j] != line[j]) {
        break
      }
      if (j == line.length - 1) {
        return false
      }
    }
  }
  return true
}

function placeNumbers (state) {
  var numberReserve = [...state.numberReserve]
  var numberLine = [...state.numberLine]

  for (let i = 0; i < numberReserve.length; i++) {
    state.numberLine = [...numberLine]
    state.numberLine.push(numberReserve[i])
    state.numberReserve = [...numberReserve]
    state.numberReserve.splice(i, 1)

    if (state.numberLine.length >= state.numberOfSummands) {
      let lastSum = 0
      for (let j = 1; j <= state.numberOfSummands; j++) {
        lastSum += state.numberLine[state.numberLine.length - j]
      }

      if (!isPrime(lastSum, state.primes)) {
        continue
      }
      if (state.numberLine.length < state.numberOfNumbers) {
        placeNumbers(state)
      } else if (checkUniqueSolution(state)) {
        state.solutions.push(state.numberLine)
      }
    } else {
      placeNumbers(state)
    }
  }

  return state
}

function solvePuzzle (state) {
  const numbersPlaced = state.numberLine.length || 0

  state = placeNumbers(state)

  return state
}

state.numberReserve = getNumbers(numberOfNumbers)
state = solvePuzzle(state)

var t1 = performance.now()

for (let i = 0; i < state.solutions.length; i++) {
  let printString = ''
  for (let j = 0; j < state.solutions[i].length; j++) {
    if (j != 0) {
      printString += ', '
    }
    printString += state.solutions[i][j]
  }
  console.log('\n' + 'Solution ' + (i + 1) + ': ' + printString)
}

console.log('Solution(s) computed in ' + Math.round(t1 - t0) + ' milliseconds.')
