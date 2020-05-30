// UNIQUE DISTANCING PUZZLE - MPMP7

const numberOfDisks = 6

// eslint-disable-next-line no-unused-vars
const { PerformanceObserver, performance } = require('perf_hooks')
var t0 = performance.now()

var state = {
  numberOfDisks: numberOfDisks,
  numberOfSquares: numberOfDisks ** 2,
  indicesDisks: [],
  coordsDisks: [],
  distances: [],
  solutions: []
}

function getDistance (coord1, coord2) {
  var distance = 0
  for (let i = 0; i < coord1.length; i++) {
    distance += (coord1[i] - coord2[i]) ** 2
  }
  return Math.sqrt(distance)
}

function getNewUniqueDistances (coords, distances) {
  var newDistances = []
  for (let i = 0; i < coords.length - 1; i++) {
    const distance = getDistance(coords[i], coords[coords.length - 1])
    if (distances.includes(distance) || newDistances.includes(distance)) {
      return false
    }
    newDistances.push(distance)
  }
  return newDistances
}

function rotateSolution (coordinates, origin) {
  var rotatedCoordinates = []
  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = [coordinates[i][0] - origin, coordinates[i][1] - origin]
    const rotated = [-coordinate[1], coordinate[0]]
    rotatedCoordinates.push([rotated[0] + origin, rotated[1] + origin])
  }
  return rotatedCoordinates
}

function reflectSolution (coordinates, origin) {
  var reflectedCoordinates = []
  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = [coordinates[i][0] - origin, coordinates[i][1] - origin]
    const reflected = [coordinate[0], -coordinate[1]]
    reflectedCoordinates.push([reflected[0] + origin, reflected[1] + origin])
  }
  return reflectedCoordinates
}

function checkUniqueSolution (coordinates, state) {
  for (let i = 0; i < state.solutions.length; i++) {
    var countEquals = 0
    for (let j = 0; j < coordinates.length; j++) {
      if (state.solutions[i].coordsDisks.find(function (ele) {
        return (JSON.stringify(ele) === JSON.stringify(coordinates[j]))
      })) {
        countEquals++
      }
      if (countEquals >= state.numberOfDisks) return false
    }
  }
  return true
}

function checkNewSolution (state) {
  var coordinates = JSON.parse(JSON.stringify(state.coordsDisks))
  const origin = (state.numberOfDisks - 1) / 2

  for (let i = 0; i < 3; i++) {
    coordinates = rotateSolution(coordinates, origin)
    if (!checkUniqueSolution(coordinates, state)) return false
  }

  coordinates = reflectSolution(coordinates, origin)
  if (!checkUniqueSolution(coordinates, state)) return false

  for (let i = 0; i < 3; i++) {
    coordinates = rotateSolution(coordinates, origin)
    if (!checkUniqueSolution(coordinates, state)) return false
  }

  return true
}

function placeDisks (state) {
  const distancesIn = JSON.parse(JSON.stringify(state.distances))
  const diskNumber = state.indicesDisks.length || 0
  const maxIndexDisk = state.numberOfSquares - (state.numberOfDisks - diskNumber - 1)

  state.indicesDisks.push(0)
  state.coordsDisks.push([0, 0])

  for (let disk = (state.indicesDisks[diskNumber - 1] + 1) || 0; disk < maxIndexDisk; disk++) {
    state.indicesDisks[diskNumber] = disk
    state.coordsDisks[diskNumber] = [Math.trunc(disk / state.numberOfDisks), disk % state.numberOfDisks]

    var newDistances = getNewUniqueDistances(state.coordsDisks, state.distances)
    if (newDistances) {
      state.distances = state.distances.concat(newDistances)
      if (diskNumber < state.numberOfDisks - 1) {
        state = placeDisks(state)
      } else if (checkNewSolution(state)) {
        state.solutions.push({
          coordsDisks: JSON.parse(JSON.stringify(state.coordsDisks)), distances: JSON.parse(JSON.stringify(state.distances))
        })
      }
    }
    state.distances = JSON.parse(JSON.stringify(distancesIn))
  }

  state.indicesDisks.pop()
  state.coordsDisks.pop()
  return state
}

state = placeDisks(state)

var t1 = performance.now()

for (let i = 0; i < state.solutions.length; i++) {
  console.log('\n' + 'Solution ' + (i + 1))
  for (let d = 0; d < numberOfDisks; d++) {
    console.log('Disk ' + (d + 1) + ': ' + state.solutions[i].coordsDisks[d])
  }
  console.log('Distances: ' + state.solutions[i].distances)
}

console.log('Solution(s) computed in ' + Math.round(t1 - t0) + ' milliseconds.')
