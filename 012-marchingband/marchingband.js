// MARCHING BAND PROBLEM - MPMP12

const goalNumberOfFormations = 64

// eslint-disable-next-line no-unused-vars
const { PerformanceObserver, performance } = require('perf_hooks')
var t0 = performance.now()

var numberOfMembers = goalNumberOfFormations - 1
var numberOfFormations = 0

// Loop until a solution is found, or a number of members is reached which results in a much larger amount of formations than the goal to prevent an endless loop.
while(numberOfFormations != goalNumberOfFormations || numberOfFormations > 10*goalNumberOfFormations) {
  // Reset
  numberOfMembers = numberOfMembers + 1
  numberOfFormations = 0

  // Brute-force one half. Count non-square formations twice.
  for (let i = 1; i <= numberOfMembers / i; i++) {
    if (numberOfMembers % i == 0) {
      if (numberOfMembers / i == i) {
        numberOfFormations = numberOfFormations + 1
      }
      else {
        numberOfFormations = numberOfFormations + 2
      }
    }
  }
}

var t1 = performance.now()

if (numberOfFormations == 64) {
  console.log('Members: ' + numberOfMembers)
  console.log('Solution computed in ' + Math.round(t1 - t0) + ' milliseconds.')
}
else {
  console.log('No solution found. Stopped at ' + numberOfMembers + ' members after ' + Math.round(t1 - t0) + ' milliseconds.')
}
