# TypeScript Problem Solving — B8A1 Assignment

Every solution lives in `solution.ts`, and each one leans on a different concept rather than just repeating the same patterns.

## What's in here

| # | Function / Class | What it practices |
|---|------------------|-------------------|
| 1 | `multiplyValue` | Optional parameters |
| 2 | `processInput` | Union types and narrowing with `typeof` |
| 3 | `formatCoordinate` | Readonly tuples |
| 4 | `concatenateArrays` | Generics with rest parameters |
| 5 | `Course`, `getPopularCourses` | Interfaces and filtering without mutating |
| 6 | `pluckValues` | Generics constrained by `keyof` |
| 7 | `Employee`, `Manager` | Classes, inheritance, `protected` vs `private` |
| 8 | `validateAgeAsync` | `Promise<string>` with `setTimeout` |

## Running the code

```bash
tsc solution.ts && node solution.js
```

## Blog posts

A couple of write-ups on things that tripped me up along the way:

- [Type Aliases vs. Interfaces in TypeScript](./type-aliases-vs-interface.md)
- [Type Narrowing in TypeScript](./type-narrowing.md)