# Understanding Union and Intersection Types in TypeScript

TypeScript is a powerful language that lets us write safer and clearer code. Two important features in TypeScript are **union types** and **intersection types**. These features help us work with different data types in flexible and structured ways.

---

## Union Types

A **union type** allows a variable to hold values of multiple types. This is useful when a value can be more than one type. For example, a variable might be either a `string` or a `number`.

### Example
```typescript
let value: string | number;
value = "Hello"; // This is allowed
value = 42;      // This is also allowed
