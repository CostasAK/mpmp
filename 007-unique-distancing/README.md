# [Unique Distancing Puzzle (MPMP7)](https://www.think-maths.co.uk/uniquedistance)

> Is it always possible to put n counters on an n x n grid, such that no two counters are the same distance apart?
>
> **Puzzle for Submission:** Can you place 6 counters on a 6x6 grid such that the distance between each counter is different?

## Solution

Brute force by checking possible combinations with the following rules:

- Use a vector of 6*6 length to place disks in.
- Determine disk coordinates by calculating the quotient and remainder of the vector index divided by 6.
- Calculate the Euclidean distance of all disks to each other and stop when a non-unique distance is found.
  - Start calculating distances after the 3rd disk is placed, and every following disk, so an early stop can be done when equal distances are found.
- ~~Break all loops once a vector of unique distances is found.~~

The solution in given by the graphic below and it was computed in approximately `57` milliseconds. All solutions were found in `693` milliseconds.

![My MPMP7 Solution](./mpmp7_solution.png)

2 solutions exist for the 6x6 case. 1 for the 7x7, none for 8x8 to 10x10
