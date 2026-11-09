# Type aliases vs. interfaces in TypeScript

Most codebases I've worked on eventually grow a mixed convention: half the models are `interface`, half are `type`, and nobody remembers why. For plain object shapes the two really are interchangeable. But there are four places where they aren't, and those are the ones worth memorizing.


## Interfaces merge, type aliases don't

Declare an interface twice and TypeScript quietly combines the two:

```ts
interface User { id: number }
interface User { name: string }
// User is now { id: number; name: string }
```

Do that with a type alias and you get `Duplicate identifier`. In application code the merging is mostly a hazard. I've burned an afternoon on a model that had grown an extra optional field from a second declaration three files away, with no error anywhere.

But merging is the entire reason interfaces still matter. Adding a field to Express's `Request`, augmenting `Window`, extending a plugin's config type from the outside: all of it runs through declaration merging. If you publish types other people are supposed to extend, `interface` stops being a style preference.


## Only type aliases can be something other than an object

An interface describes an object shape, or a callable or constructible one. A type alias just names any type at all:

```ts
type Status = "pending" | "approved" | "rejected";
type Point = [number, number];
type Handler = (e: Event) => void;
type UserSummary = User & { active: boolean };
```

There is no interface equivalent of a union, and in practice that settles most of the argument before it starts. Discriminated unions are where TypeScript earns its keep, and they are alias-only territory.

## `extends` catches conflicts, `&` hides them

This one bites people. An interface that extends another and contradicts it fails at the declaration:

```ts
interface Admin extends User {
  id: string; // Error: Types of property 'id' are incompatible
}
```

The intersection version compiles fine:

```ts
type Admin = User & { id: string };
```

No complaint. `Admin["id"]` is now `never`, and you find out later at the call site, usually with a confusing message pointing at code you didn't write. Intersections don't resolve conflicts, they just accumulate them.



## What I actually do

Interface for object shapes, especially anything exported from a shared package or implemented by a class. Type alias the moment the thing stops being a plain object: unions, tuples, function types, mapped and conditional types, anything built with generics and `infer`.

And if the file you're editing already picked a side, match it. A consistent wrong convention costs less than a well-reasoned mixed one.