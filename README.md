# TypeScript Problem Solving — B8A1 Assignment

All eight problems are implemented in a single file, `solutions.ts`, with explicit parameter and return types throughout.

## Solutions

Everything lives in [`solutions.ts`](./solutions.ts).

| # | Function / Class | Concept covered |
|---|------------------|-----------------|
| 1 | `multiplyValue` | Optional parameter, with `0` handled correctly |
| 2 | `processInput` | Union types and `typeof` narrowing |
| 3 | `formatCoordinate` | Readonly tuple parameter |
| 4 | `concatenateArrays` | Generics with rest parameters |
| 5 | `Course`, `getPopularCourses` | Interface and non-mutating filter |
| 6 | `pluckValues` | Generics constrained with `keyof` |
| 7 | `Employee`, `Manager` | Inheritance, `protected` and `private` |
| 8 | `validateAgeAsync` | `Promise<string>` with `setTimeout` and `Error` rejection |

The functions only return values — no `console.log` calls or test invocations are left in the file.



## Blog posts

A couple of write-ups on things that tripped me up along the way:

- [Type Aliases vs. Interfaces in TypeScript](./type-aliases-vs-interface.md)
- [Type Narrowing in TypeScript](./type-narrowing.md)


## Structure

```text
├── solutions.ts
├── type-aliases-vs-interface.md
├── type-narrowing.md
└── README.md
```