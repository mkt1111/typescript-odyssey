import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";

export default function Functions() {
  return (
    <TopicLayout
      title="Functions"
      description="Master function typing, parameters, and return values in TypeScript"
    >
      <Section title="Function Type Annotations">
        <UseCase
          title="Parameter and Return Types"
          description="Explicitly defining what goes in and what comes out of functions"
        >
          <CodeEditor
            title="Basic Function Types"
            initialCode={`// In TypeScript: function add(a: number, b: number): number
function add(a, b) {
  return a + b;
}

// In TypeScript: const multiply = (a: number, b: number): number =>
const multiply = (a, b) => {
  return a * b;
};

// In TypeScript: function logMessage(message: string): void
function logMessage(message) {
  console.log(message);
}

console.log(\`5 + 3 = \${add(5, 3)}\`);
console.log(\`4 * 6 = \${multiply(4, 6)}\`);
logMessage("Functions are typed!");`}
          />
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Optional and Default Parameters"
          description="Handle flexible function arguments with optional and default values"
        >
          <CodeEditor
            title="Flexible Parameters"
            initialCode={`// In TypeScript: function greet(name: string, greeting?: string): string
function greet(name, greeting) {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// In TypeScript: function power(base: number, exponent: number = 2): number
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}

// In TypeScript: function createUser(name: string, age?: number, role: string = "user")
function createUser(name, age, role = "user") {
  console.log(\`Name: \${name}, Age: \${age || "unknown"}, Role: \${role}\`);
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
console.log(\`2^3 = \${power(2, 3)}\`);
console.log(\`5^2 = \${power(5)}\`);
createUser("Charlie", 25, "admin");`}
          />
        </UseCase>

        <UseCase
          title="Rest Parameters"
          description="Work with variable numbers of arguments using rest parameters"
        >
          <CodeEditor
            title="Rest Parameters Example"
            initialCode={`// In TypeScript: function sum(...numbers: number[]): number
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// In TypeScript: function introduce(greeting: string, ...names: string[]): string
function introduce(greeting, ...names) {
  return \`\${greeting} \${names.join(", ")}!\`;
}

console.log(\`Sum of 1,2,3,4,5: \${sum(1, 2, 3, 4, 5)}\`);
console.log(\`Sum of 10,20: \${sum(10, 20)}\`);
console.log(introduce("Welcome", "Alice", "Bob", "Charlie"));`}
          />
        </UseCase>

        <UseCase
          title="Function Type Aliases"
          description="Create reusable function type definitions for consistency"
        >
          <CodeEditor
            title="Function Types"
            initialCode={`// In TypeScript: type MathOperation = (a: number, b: number) => number;

// Functions that match the MathOperation type
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// In TypeScript: function calculate(op: MathOperation, a: number, b: number): number
function calculate(op, a, b) {
  return op(a, b);
}

console.log(\`Add: \${calculate(add, 10, 5)}\`);
console.log(\`Subtract: \${calculate(subtract, 10, 5)}\`);
console.log(\`Multiply: \${calculate(multiply, 10, 5)}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
