---
layout: cover
monaco: true
routerMode: hash
title: Type~~Script~~ Challenges
---

# Type~~Script~~ Challenges

Eugene Obrezkov aka ghaiklor


---
layout: center
---

# On-Site Meetup!

### It's Happening

![It's Happening](https://media.giphy.com/media/huJmPXfeir5JlpPAx0/giphy.gif)


---
layout: full
---

# Why do we suffer?

<v-clicks>

- To have much more safe code (**runtime safety**)
- To have less tests (**some error classes are covered by compiler**)
- To have less direct communication with the team (**type as a documentation**)
- To understand what Israel developers wrote and make sure that they don’t understand what we wrote (**based on silly talks**)

</v-clicks>


---
layout: statement
---

# TypeScript is not about strings and numbers only

## Its type system has much more to offer than that


---
layout: statement
---

# Let’s start with warm up already


---
layout: full
---

# Hello, World!

```typescript {monaco}
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = any

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
```

[Open in TypeScript Playground](https://tsch.js.org/13/play)


---
layout: full
---

# Type Lookup

```typescript {monaco}
type LookUp<U, T> = any

import { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]
```

[Open in TypeScript Playground](https://tsch.js.org/62/play)


---
layout: full
---

# Merge

```typescript {monaco}
type Merge<F, S> = any;

import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number;
  b: string;
};

type Bar = {
  b: number;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number;
    b: number;
  }>>
]
```

[Open in TypeScript Playground](https://tsch.js.org/599/play)


---
layout: full
---

# Chainable Options

```typescript {monaco}
type Chainable = {
  option(key: string, value: any): any
  get(): any
}

import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type cases = [
  Expect<Alike<typeof result, Expected>>
]
```

[Open in TypeScript Playground](https://tsch.js.org/12/play)


---
layout: full
---

# Permutation

```typescript {monaco}
type Permutation<T> = any

import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<never>, []>>,
]
```

[Open in TypeScript Playground](https://tsch.js.org/296/play)


---
layout: statement
---

# We are not sure but, maybe, we will do these challenges event public


---
layout: statement
---

# No sense in hiding solutions

<https://ghaiklor.github.io/type-challenges-solutions>


---
layout: statement
---

# Join Slack Channel

## #type-challenges


---
layout: statement
---

# Thanks!
