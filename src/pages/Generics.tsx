import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";

export default function Generics() {
  return (
    <TopicLayout
      title="Generics"
      description="Write flexible, reusable code with type parameters that work across different types"
    >
      <Section title="Generic Functions">
        <UseCase
          title="Type Parameters in Functions"
          description="Create functions that work with any type while maintaining type safety"
        >
          <CodeEditor
            title="Basic Generic Function"
            initialCode={`// In TypeScript: function identity<T>(value: T): T
function identity(value) {
  return value;
}

// In TypeScript: function firstElement<T>(arr: T[]): T | undefined
function firstElement(arr) {
  return arr[0];
}

// TypeScript would infer types automatically
const num = identity(42);
const str = identity("Hello");

const firstNum = firstElement([1, 2, 3]);
const firstName = firstElement(["Alice", "Bob"]);

console.log(\`Number: \${num}\`);
console.log(\`String: \${str}\`);
console.log(\`First number: \${firstNum}\`);
console.log(\`First name: \${firstName}\`);`}
          />
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Generic Interfaces and Types"
          description="Define reusable data structures that work with any type"
        >
          <CodeEditor
            title="Generic Data Structures"
            initialCode={`// In TypeScript: interface Box<T> { value: T; isEmpty: boolean; }
// In TypeScript: type Result<T> = { success: boolean; data: T; message: string; }

const numberBox = {
  value: 100,
  isEmpty: false
};

const stringBox = {
  value: "TypeScript",
  isEmpty: false
};

const result = {
  success: true,
  data: [1, 2, 3],
  message: "Data loaded successfully"
};

console.log(\`Number box: \${numberBox.value}\`);
console.log(\`String box: \${stringBox.value}\`);
console.log(\`Result data: [\${result.data.join(", ")}]\`);`}
          />
        </UseCase>

        <UseCase
          title="Generic Classes"
          description="Build flexible class implementations that work with multiple types"
        >
          <CodeEditor
            title="Generic Class Example"
            initialCode={`// In TypeScript: class Stack<T> with private items: T[]
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(\`Stack size: \${numberStack.size()}\`);
console.log(\`Top element: \${numberStack.peek()}\`);
console.log(\`Popped: \${numberStack.pop()}\`);
console.log(\`New size: \${numberStack.size()}\`);`}
          />
        </UseCase>

        <UseCase
          title="Generic Constraints"
          description="Limit generic types to those with specific properties or capabilities"
        >
          <CodeEditor
            title="Constrained Generics"
            initialCode={`// In TypeScript: function logLength<T extends { length: number }>(item: T): void
function logLength(item) {
  console.log(\`Length: \${item.length}\`);
}

// In TypeScript: interface HasId { id: number; }
// In TypeScript: function findById<T extends HasId>(items: T[], id: number): T | undefined
function findById(items, id) {
  return items.find(item => item.id === id);
}

// These work because they have length property
logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10, value: "test" });

// Using the generic function
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const found = findById(users, 2);
console.log(\`Found user: \${found?.name}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
