# Union and Intersection Types in TypeScript

**Union Types (`|`)** allow a variable to hold one of multiple types, providing flexibility.  
**Example:** `let value: string | number;` means `value` can be a `string` or `number`.  
This is useful for handling varied input types safely.

**Intersection Types (`&`)** combine multiple types into one, ensuring a value has all the properties of each type.  
**Example:** `type Person = HasName & HasAge;` creates a `Person` type that must have both `name` and `age` properties.  
This is great for creating complex, structured data.

Both make TypeScript code safer, clearer, and more adaptable!
