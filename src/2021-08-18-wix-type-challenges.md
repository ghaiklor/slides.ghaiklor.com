---
layout: cover
monaco: true
routerMode: hash
title: Type~~Script~~ Challenges
---

# Type~~Script~~ Challenges

Eugene Obrezkov aka ghaiklor


---
layout: full
---

# Who am I?

<v-clicks>

- Working at Wix for almost 2 years
- Infrastructure team (frameworks, build tools, etc)
- Too noisy when there is nothing to do

</v-clicks>


---
layout: statement
---

# Type Challenges?


---
layout: statement
---

## To learn something new about TypeScript


---
layout: statement
---

## What do we need to know to solve the following challenges?


---
layout: full
---

# Generics

These are the way to create a component that can work over a variety of types rather than a single one.

```typescript {monaco}
function identity(arg: number): number {
  return arg;
}
```


---
layout: full
---

# Mapped Types

When you don’t want to repeat yourself, sometimes a type needs to be based on another type.

```typescript {monaco}
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
```


---
layout: full
---

# Intersections and Unions

You can either "combine" a new type from others or "intersect" them.

```typescript {monaco}
// Union
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
printId({ myID: 22342 });

// Intersection
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```


---
layout: full
---

# Conditional Types

Conditional types help describe the relation between the types of inputs and outputs.

```typescript {monaco}
// Conditional
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

// Distributivity
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
```


---
layout: statement
---

# Enough!

### Please, stop!


---
layout: statement
---

# Let's start with the challenges


---
layout: full
---

# Readonly 2

```typescript {monaco}
import { Alike, Expect } from '@type-challenges/utils'

type MyReadonly2<T, K> = any

interface Todo1 { title: string; description?: string; completed: boolean }
interface Todo2 { readonly title: string; description?: string; completed: boolean }
interface Expected { readonly title: string; readonly description?: string; completed: boolean }

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]
```

[Open in TypeScript Playground](https://tsch.js.org/8/play)


---
layout: full
---

# Type Lookup

```typescript {monaco}
import { Equal, Expect } from '@type-challenges/utils'

type LookUp<U, T> = any

interface Cat { type: 'cat'; breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal' }
interface Dog { type: 'dog'; breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'; color: 'brown' | 'white' | 'black' }

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
import { Equal, Expect } from '@type-challenges/utils'

type Merge<F, S> = any;

type Foo = { a: number; b: string; };
type Bar = { b: number; };

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
import { Alike, Expect } from '@type-challenges/utils'

type Chainable = {
  option(key: string, value: any): any
  get(): any
}

declare const a: Chainable
const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [Expect<Alike<typeof result, Expected>>]
type Expected = { foo: number; bar: { value: string }; name: string }
```

[Open in TypeScript Playground](https://tsch.js.org/12/play)


---
layout: full
---

# Absolute

```typescript {monaco}
import { Equal, Expect } from '@type-challenges/utils'

type Absolute<T extends number | string | bigint> = any

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]
```

[Open in TypeScript Playground](https://tsch.js.org/529/play)


---
layout: full
---

# More to follow

<v-clicks>

- Type Challenges ([type-challenges/type-challenges](https://github.com/type-challenges/type-challenges))
- Telegram channel about TypeScript ([t.me/wild_wild_web](https://t.me/wild_wild_web))
- My personal Twitter (attention, opinions only) ([@ghaiklor](https://twitter.com/ghaiklor))

</v-clicks>


---
layout: statement
---

# Thanks!
