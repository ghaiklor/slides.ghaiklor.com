---
layout: cover
monaco: true
---

# Type ~~Script~~ Challenges

Eugene Obrezkov aka ghaiklor

<!--
Just a title while everyone is gathering and stuff.
In the end, say that we will be talking about TypeScript now.
But before talking about TypeScript I would like to introduce myself.
-->

---
layout: full
---

# Who am I?

<v-clicks>

- Software Engineer at Wix (1 year < *you are here* > 2 years)
- Part of the Serverless team (> 1 year) and Single Runtime (?)
- Hacking around compilers, operating systems, Rust at spare time
- Sometimes, blogging, lectures, events on the occasion

</v-clicks>

<!--
Software Engineer at Wix for almost a year and a half (soon).
Part of the serverless team.
Recently, joined the Single Runtime Initiative.
In spare time, hacking around compilers, bare metals and stuff.
Sometimes, writing blog posts, participating in events and so on.
-->

---
layout: statement
---

# What is Type Challenges?

Type Challenges is aimed at helping you better understand how the type system works, writing your own utilities, or just having fun with the challenges.

<!--
Type Challenges is the project that gather different problems, challenges.
Some of them has a practical value in a real world.
Some of them just for fun.
All you need to know is that there are some challenges and you need to solve them.
Just a simple coding activity.
-->

---
layout: statement
---

# What is the trick?

The trick is that to solve the challenge you can’t use the runtime.
To solve the challenge, you can use only and only the type system (compile time).

<!--
The trick is that to solve the challenge, you can't use the runtime.
For example, if the challenge requires to check if the property exists in object.
You don't write the TypeScript code that actually checks the object in runtime.
You must to write the type, that accepts the object and checks the property in compile time.
-->

---
layout: statement
---

## You passed the challenge not when the tests are passing but when the program is compiled!

<!--
The challenge is passed only and only when the compilation is passed.
No tests, no runtime, no environment.
Just a playground and a compilation there.
-->

---
layout: full
---

# How do we take part?

<v-clicks>

- Open the slides in Google Chrome (link in the chat)
- Navigate to the "Hello, World!" slide with the code snippet (slide #7)
- When we are on the slide with the snippet, its time to split into breakout rooms
- <carbon-forward-10 />
- Gather in general room again where we discuss the solutions

</v-clicks>

<!--
Make sure that you have opened the slides in Google Chrome.
Once we get to the challenge, you will see a snippet of TypeScript code.
At this moment, we split to breakout rooms and try to solve the challenge.
Please note, that you don't need to install anything.
You can start solving them right in the slides, in the snippet.
We wait for ten minutes and afterwards, gathering in general room for discussion.
-->

---
layout: full
---

# Hello, World!

In Type Challenges, we use the type system itself to do the assertion.

```typescript {monaco}
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = any

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
```


---
layout: full
---

# Pick

Constructs a type by picking the set of properties K from T.

```typescript {monaco}
import { Equal, Expect } from '@type-challenges/utils'

interface Todo { title: string, description: string, completed: boolean }
interface Expected1 { title: string }
interface Expected2 { title: string, completed: boolean }

type MyPick<T, K> = any

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]
```


---
layout: full
---

# Readonly

Constructs a type with all properties of T set to `readonly`.
Meaning the properties of the constructed type cannot be reassigned.

```typescript {monaco}
import { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = any

interface Todo1 { title: string, description: string, completed: boolean }

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>
]
```


---
layout: full
---

# First of Array

Implement a generic `First<T>` that takes an array `T` and returns it's first element's type.

```typescript {monaco}
import { Equal, Expect } from '@type-challenges/utils'

type First<T> = any

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
```


---
layout: statement
---

# Unlock the Chapter 2 for $4.99

<!--
Thanks for your time.
I truly believe that we can gather sometimes for such a coding activity.
I can make more slides like this one with interactive environment.
So, please, leave your feedback for our guild master.
In case, you are interested in such an activity, let him know.
We will do whatever we can to continue such an activity.
Thanks!
-->
