---
layout: cover
monaco: true
routerMode: hash
title: TypeScript Utility Types
---

# TypeScript Utility Types

Eugene Obrezkov aka ghaiklor


---
layout: statement
---

## I assume you know the basics of generic types, type parameters, inferring, mapped types, conditional types, etc


---
layout: statement
---

## Do not afraid, if you missed something or didn't know, I'll be telling a crash course for those


---
layout: statement
---

## We will learn the utility types by creating our own


---
layout: statement
---

# GO!


---
layout: full
---

# Partial\<T\>

Constructs a type with all properties of `T` set to optional.
This utility will return a type that represents all subsets of a given type.

```typescript {monaco}
type MyPartial<T> = any

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: MyPartial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```


---
layout: full
---

# Required\<T\>

Constructs a type consisting of all properties of `T` set to required.
The opposite of `Partial<T>`.

```typescript {monaco}
type MyRequired<T> = any

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
const obj2: MyRequired<Props> = { a: 5 };
```


---
layout: full
---

# Readonly\<T\>

Constructs a type with all properties of `T` set to readonly, meaning the properties of the constructed type cannot be reassigned.

```typescript {monaco}
type MyReadonly<T> = any

interface Todo {
  title: string;
}

const todo: MyReadonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
```


---
layout: full
---

# Record\<K, T\>

Constructs an object type whose property keys are `K` and whose property values are `T`.
This utility can be used to map the properties of a type to another type.

```typescript {monaco}
type MyRecord<K, T> = any

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: MyRecord<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
```


---
layout: full
---

# Pick\<T, K\>

Constructs a type by picking the set of properties `K` from `T`.

```typescript {monaco}
type MyPick<T, K> = any

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
```


---
layout: full
---

# Omit\<T, K\>

Constructs a type by picking all properties from `T` and then removing `K`.

```typescript {monaco}
type MyOmit<T, K> = any

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoInfo = MyOmit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
```


---
layout: full
---

# Parameters\<T\>

Constructs a tuple type from the types used in the parameters of a function type `T`.

```typescript {monaco}
type MyParameters<T> = any

type T0 = MyParameters<() => string>;
type T1 = MyParameters<(s: string) => void>;
type T2 = MyParameters<<T>(arg: T) => T>;
type T3 = MyParameters<(arg: { a: number; b: string }) => void>;
type T4 = MyParameters<any>;
type T5 = MyParameters<never>;
type T6 = MyParameters<string>;
type T7 = MyParameters<Function>;
```


---
layout: full
---

# ReturnType\<T\>

Constructs a type consisting of the return type of function `T`.

```typescript {monaco}
type MyReturnType<T> = any

type T0 = MyReturnType<() => string>;
type T1 = MyReturnType<(s: string) => void>;
type T2 = MyReturnType<<T>() => T>;
type T3 = MyReturnType<<T extends U, U extends number[]>() => T>;
type T4 = MyReturnType<() => { a: number; b: string }>;
type T5 = MyReturnType<any>;
type T6 = MyReturnType<never>;
type T7 = MyReturnType<string>;
type T8 = MyReturnType<Function>;
```


---
layout: statement
---

## What else can we do?


---
layout: full
---

# Chainable

Chainable options are commonly used in JavaScript.
But when we switch to TypeScript, can you properly type it?

```typescript {monaco}
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
```


---
layout: full
---

# Promise.all

Type the function `Promise.all` that accepts an array of `PromiseLike` objects.
The returning value should be `Promise<T>` where `T` is the resolved result array.

```typescript {monaco}
declare function PromiseAll(values: any): any

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
```


---
layout: statement
---

## Types in TypeScript are more expressive than most of you can think


---
layout: statement
---

## It has its cons, sure, a lot, actually, but it is another topic


---
layout: statement
---

## You can find more challenges like these here

https://ghaiklor.github.io/type-challenges-solutions/


---
layout: statement
---

# Thanks!
