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
            initialCode={`// In TypeScript: let age: number = 25;
let age = 25;
let price = 99.99;

// In TypeScript: let name: string = "TypeScript";
let name = "TypeScript";
let greeting = \`Hello, \${name}!\`;

// In TypeScript: let isActive: boolean = true;
let isActive = true;
let hasPermission = false;

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
            initialCode={`// In TypeScript: let scores: number[] = [95, 87, 92, 88];
let scores = [95, 87, 92, 88];
let average = scores.reduce((a, b) => a + b) / scores.length;

// In TypeScript: let fruits: string[] = ["apple", "banana", "orange"];
let fruits = ["apple", "banana", "orange"];

// In TypeScript: let colors: Array<string> = ["red", "green", "blue"];
let colors = ["red", "green", "blue"];

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
            initialCode={`// In TypeScript: let user: { name: string; age: number; active: boolean }
let user = {
  name: "Alice",
  age: 30,
  active: true
};

// In TypeScript: let config: { theme: string; debug?: boolean }
let config = {
  theme: "dark"
  // debug property is optional in TypeScript
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
            initialCode={`// In TypeScript with explicit annotation: let explicitNumber: number = 42;
let explicitNumber = 42;

// TypeScript infers this is a number automatically
let inferredNumber = 42;

// TypeScript infers this is number[]
let numbers = [1, 2, 3];

// TypeScript infers the object shape
let person = {
  name: "Bob",
  age: 25
};

console.log(\`Explicit: \${explicitNumber}\`);
console.log(\`Inferred: \${inferredNumber}\`);
console.log(\`Person: \${person.name}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
