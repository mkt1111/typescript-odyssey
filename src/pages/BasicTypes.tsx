import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";

export default function BasicTypes() {
  return (
    <TopicLayout
      title="Basic Types"
      description="Learn the fundamental building blocks of TypeScript's type system"
    >
      <Section title="Core Primitive Types">
        <UseCase
          title="Numbers, Strings, and Booleans"
          description="The most common types you'll use in TypeScript for basic values"
        >
          <CodeEditor
            title="Try It Yourself"
            initialCode={`// Number type
let age: number = 25;
let price: number = 99.99;

// String type
let name: string = "TypeScript";
let greeting: string = \`Hello, \${name}!\`;

// Boolean type
let isActive: boolean = true;
let hasPermission: boolean = false;

console.log(\`\${name} user, age \${age}\`);
console.log(\`Active: \${isActive}\`);`}
          />
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Arrays and Typed Collections"
          description="Working with collections of data with type safety"
        >
          <CodeEditor
            title="Array Examples"
            initialCode={`// Array of numbers
let scores: number[] = [95, 87, 92, 88];
let average = scores.reduce((a, b) => a + b) / scores.length;

// Array of strings
let fruits: string[] = ["apple", "banana", "orange"];

// Alternative array syntax
let colors: Array<string> = ["red", "green", "blue"];

console.log(\`Average score: \${average}\`);
console.log(\`Fruits: \${fruits.join(", ")}\`);`}
          />
        </UseCase>

        <UseCase
          title="Object Types"
          description="Defining structured data with inline type annotations"
        >
          <CodeEditor
            title="Object Type Examples"
            initialCode={`// Inline object type
let user: { name: string; age: number; active: boolean } = {
  name: "Alice",
  age: 30,
  active: true
};

// Object with optional properties
let config: { theme: string; debug?: boolean } = {
  theme: "dark"
  // debug is optional
};

console.log(\`User: \${user.name}, Age: \${user.age}\`);
console.log(\`Theme: \${config.theme}\`);`}
          />
        </UseCase>

        <UseCase
          title="Type Annotations vs Inference"
          description="Understanding when TypeScript can infer types automatically"
        >
          <CodeEditor
            title="Type Inference Demo"
            initialCode={`// Explicit annotation
let explicitNumber: number = 42;

// Type inference (TypeScript figures it out)
let inferredNumber = 42; // TypeScript knows this is number

// Array inference
let numbers = [1, 2, 3]; // TypeScript knows: number[]

// Object inference
let person = {
  name: "Bob",
  age: 25
}; // TypeScript infers the shape

console.log(\`Explicit: \${explicitNumber}\`);
console.log(\`Inferred: \${inferredNumber}\`);
console.log(\`Person: \${person.name}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
