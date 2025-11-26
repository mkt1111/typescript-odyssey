import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";

export default function Interfaces() {
  return (
    <TopicLayout
      title="Interfaces"
      description="Define contracts for object shapes and create reusable type definitions"
    >
      <Section title="Basic Interface Definition">
        <UseCase
          title="Object Shape Contracts"
          description="Interfaces define the structure that objects must follow"
        >
          <CodeEditor
            title="Basic Interface"
            initialCode={`// Define an interface
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

// Object must match the interface
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  active: true
};

function displayUser(u: User): void {
  console.log(\`User: \${u.name} (\${u.email})\`);
  console.log(\`ID: \${u.id}, Active: \${u.active}\`);
}

displayUser(user);`}
          />
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Optional and Readonly Properties"
          description="Control which properties are required and which can be modified"
        >
          <CodeEditor
            title="Property Modifiers"
            initialCode={`interface Product {
  readonly id: number;      // Cannot be changed after creation
  name: string;
  price: number;
  description?: string;     // Optional property
  inStock?: boolean;
}

const laptop: Product = {
  id: 101,
  name: "Laptop Pro",
  price: 1299.99,
  description: "High-performance laptop"
};

// laptop.id = 102; // Error: readonly property
laptop.price = 1199.99; // OK: regular property

console.log(\`Product: \${laptop.name}\`);
console.log(\`Price: $\${laptop.price}\`);
console.log(\`Description: \${laptop.description || "N/A"}\`);`}
          />
        </UseCase>

        <UseCase
          title="Interface Extension"
          description="Build complex interfaces by extending simpler ones"
        >
          <CodeEditor
            title="Extending Interfaces"
            initialCode={`// Base interface
interface Person {
  name: string;
  age: number;
}

// Extended interface adds more properties
interface Employee extends Person {
  employeeId: number;
  department: string;
  salary: number;
}

const employee: Employee = {
  name: "Bob Smith",
  age: 32,
  employeeId: 5001,
  department: "Engineering",
  salary: 95000
};

console.log(\`Employee: \${employee.name}\`);
console.log(\`Department: \${employee.department}\`);
console.log(\`ID: \${employee.employeeId}\`);`}
          />
        </UseCase>

        <UseCase
          title="Function Signatures in Interfaces"
          description="Interfaces can define required methods and their signatures"
        >
          <CodeEditor
            title="Interface Methods"
            initialCode={`interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  currentValue: number;
}

// Object implementing the interface
const calc: Calculator = {
  currentValue: 0,
  add(a, b) {
    this.currentValue = a + b;
    return this.currentValue;
  },
  subtract(a, b) {
    this.currentValue = a - b;
    return this.currentValue;
  }
};

console.log(\`10 + 5 = \${calc.add(10, 5)}\`);
console.log(\`20 - 8 = \${calc.subtract(20, 8)}\`);
console.log(\`Current value: \${calc.currentValue}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
