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
            initialCode={`// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function with no return value
function logMessage(message: string): void {
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
            initialCode={`// Optional parameter (may be undefined)
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Default parameter value
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

// Mix of required, optional, and default
function createUser(name: string, age?: number, role: string = "user") {
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
            initialCode={`// Rest parameter collects remaining arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Function with fixed and rest parameters
function introduce(greeting: string, ...names: string[]): string {
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
            initialCode={`// Define a function type
type MathOperation = (a: number, b: number) => number;

// Use the function type
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

// Higher-order function using the type
function calculate(op: MathOperation, a: number, b: number): number {
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
