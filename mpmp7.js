// UNIQUE DISTANCING PUZZLE - MPMP7

// eslint-disable-next-line no-unused-vars
const { PerformanceObserver, performance } = require('perf_hooks')
var t0 = performance.now()

const numberOfDisks = 6

const numberOfSquares = numberOfDisks ** 2
var coordsDisks = []
var allUnique = true

var distances = []
var distance = []

for (let disk1 = 0; disk1 < numberOfSquares - 5; disk1++) {
  coordsDisks[0] = [Math.trunc(disk1 / numberOfDisks), disk1 % numberOfDisks]

  for (let disk2 = disk1 + 1; disk2 < numberOfSquares - 4; disk2++) {
    coordsDisks[1] = [Math.trunc(disk2 / numberOfDisks), disk2 % numberOfDisks]

    for (let disk3 = disk2 + 1; disk3 < numberOfSquares - 3; disk3++) {
      coordsDisks[2] = [Math.trunc(disk3 / numberOfDisks), disk3 % numberOfDisks]

      for (let disk4 = disk3 + 1; disk4 < numberOfSquares - 2; disk4++) {
        coordsDisks[3] = [Math.trunc(disk4 / numberOfDisks), disk4 % numberOfDisks]

        for (let disk5 = disk4 + 1; disk5 < numberOfSquares - 1; disk5++) {
          coordsDisks[4] = [Math.trunc(disk5 / numberOfDisks), disk5 % numberOfDisks]

          for (let disk6 = disk5 + 1; disk6 < numberOfSquares; disk6++) {
            coordsDisks[5] = [Math.trunc(disk6 / numberOfDisks), disk6 % numberOfDisks]

            distances = []
            allUnique = true

            for (let d = 0; d < numberOfDisks - 1; d++) {
              for (let i = d + 1; i < numberOfDisks; i++) {
                distance = 0
                for (let j = 0; j < coordsDisks[d].length; j++) {
                  distance += (coordsDisks[d][j] - coordsDisks[i][j]) ** 2
                }
                distance = Math.sqrt(distance)
                if (distances.includes(distance)) {
                  allUnique = false
                  break
                }
                distances.push(distance)
              }
              if (!allUnique) break
            }
          }
          if (allUnique) break
        }
        if (allUnique) break
      }
      if (allUnique) break
    }
    if (allUnique) break
  }
  if (allUnique) break
}

var t1 = performance.now()

for (let d = 0; d < numberOfDisks; d++) {
  console.log('Disk ' + (d + 1) + ': ' + coordsDisks[d])
}
console.log('Distances: ' + distances)

console.log('Solution computed in ' + Math.round(t1 - t0) + ' milliseconds.')
