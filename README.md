# mpmp

My Matt Parker's Math Puzzles solutions.

- [The 1 Million Bank Balance Puzzle (MPMP Puzzle 6)](#the-1-million-bank-balance-puzzle-mpmp-puzzle-6)
  - [My Solution](#my-solution)
- [Unique Distancing Puzzle (MPMP7)](#unique-distancing-puzzle-mpmp7)
  - [My Solution](#my-solution-1)

## [The 1 Million Bank Balance Puzzle (MPMP Puzzle 6)](https://www.think-maths.co.uk/BankBalance)

> A bank is running a competition. You can make **two deposits** (of integer pounds) on two consecutive days and everyday the bank will add your last two **balances** together to give you a new balance.
>
> For example: You deposit £10 on day 1 and £20 on day 2. Your balance on day 1 would be £10, day 2 £30, day 3 £40, day 4 £70 and so on.....
>
> You can keep the money if your balance eventually equals **one million pounds** exactly. If more than one person hits a million exactly, the prize goes to the person who took the **longest** to get there.
>
> **Puzzle for Submission:** What must your initial two deposits be to ensure that you win the million pounds?

### My Solution

Brute force by checking all starting deposits with the following constraints:

- Start at 0 for each of the deposits.
- Skip if there is no growth.
- Continue when balance is larger than or equal to 1 million.
- A deposit cannot be larger than the sum of the starting deposits of the previous solution.
- Keep a ledger of the balances.
- Save the longest ledger each time a solution is found.

The solution is `144` and `154`, resulting in `19` steps. Computed in approximately `1.6` seconds.

## [Unique Distancing Puzzle (MPMP7)](https://www.think-maths.co.uk/uniquedistance)

> Is it always possible to put n counters on an n x n grid, such that no two counters are the same distance apart?
>
> **Puzzle for Submission:** Can you place 6 counters on a 6x6 grid such that the distance between each counter is different?

### My Solution

Brute force by checking possible combinations with the following rules:

- Use a vector of 6*6 length to place disks in.
- Determine disk coordinates by calculating the quotient and remainder of the vector index divided by 6.
- Calculate the Euclidean distance of all disks to each other and stop when a non-unique distance is found.
- Break all loops once a vector of unique distances is found.

The solution in given by the graphic below and it was cimputed in approximately `57` milliseconds.

![My MPMP7 Solution](./mpmp7_solution.png)
