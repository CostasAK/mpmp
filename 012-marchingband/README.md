# [MPMP12: Marching Band Problem](https://www.think-maths.co.uk/marchingband)

> You are creating a marching band. Your marching band must march in rows, but each row must have an equal number of performers in it. You want your marching band to be able to march in **exactly** 64 different formations.
>
> **Puzzle for Submission**: What is the fewest number of performers you require for your marching band to have 64 marching options? **(Only whole positive numbers will be accepted)**

## Solution

- Iterate, starting at 64 members.
- Brute force by iterating over divisors and checking for zero remainder.
- Count a formation twice, if non-square. This way only ~half the iterations are needed.
- Stop the loop if exactly 64 formations have been found for a number of members, or when a number of formations is found that far exceeds the goal (to prevent an infinite loop).

The solution is **7560 members**, which was calculated in approximately 5 milliseconds.
