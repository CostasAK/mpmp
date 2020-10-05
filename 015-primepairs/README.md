# [MPMP15: Prime Pairs Puzzle](https://www.think-maths.co.uk/primepairs)

> **Puzzle for Submission**: Rearrange the numbers from 1-9, such that all adjacent pairs sum to a prime number.

## Solution

- Pre-determine all possible primes. Do this by finding all primes smaller than the sum of the largest N numbers, where N is 2 for couples according to the puzzle.
- Set up a reserve and number line, to keep track of numbers that have yet to be placed and have preliminary placements. These together describe the state of the brute-forcer.
- Place numbers on the number line, one by one, checking each time whether adjacent pairs are prime or not. This can be checked by checking against the already known list of possible primes, making checking faster.
  - If not, the last placement is reverted.
  - If so, a new number is placed next in line from those in the reserve still, using a recursive function call.
- Any time all numbers are placed and the previously described check is positive, save the solution. Then, take back placements until the reserve is filled such that a new placement that hasn't been processed can be done.

There are *70* solutions (not counting mirrored solutions) for numbers *1* through *9* and summing pairs. They were all calculated in *8* milliseconds.
