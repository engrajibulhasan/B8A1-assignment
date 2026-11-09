# Type Narrowing in Typescript

If you've used union types, you've already hit this. You type something as `string | number`, try to call `.trim()` on it, and TypeScript complains. That's fair, honestly — at that point it has no idea which of the two you're holding. Narrowing is how you tell it.

The nice part is that you usually don't write anything special. TypeScript reads the normal `if` checks you'd write anyway and figures it out from there.

`typeof` covers primitives:

```ts
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();      // value: string
  }
  return value.toFixed(2);    // value: number
}
```

Once classes are involved, `typeof` is useless — everything comes back as `"object"`. Use `instanceof`:

```ts
function describe(input: Date | Error) {
  if (input instanceof Date) {
    return input.toISOString();   // input: Date
  }
  return input.message;           // input: Error
}
```

The one I reach for most is `in`. Objects coming back from an API have no class to check against, so you check for a key instead:

```ts
type Car = { wheels: number };
type Boat = { sails: number };

function move(vehicle: Car | Boat) {
  return "wheels" in vehicle
    ? `Driving on ${vehicle.wheels} wheels`
    : `Sailing with ${vehicle.sails} sails`;
}
```

A few things I picked up the hard way:

- Truthiness checks count. An early `if (!user) return;` is enough, and `user` is defined everywhere below it.
- Narrowing only survives inside the branch. Reassign the variable or `await` something in the middle and it widens back, which is confusing the first time you see it.
- Once a union has more than two or three members, stop writing guards and give each member a `kind` field. Switch on that and you get narrowing for free, plus a complaint when you forget a case.

When none of the built-in checks fit, you can write your own guard that returns `value is Car`.

The point is to use checks you'd write anyway instead of `as`. An assertion just silences the compiler; narrowing keeps it working for you.

