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
            initialCode={`// Generic function with type parameter T
function identity<T>(value: T): T {
  return value;
}

// Generic array function
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers the type
const num = identity(42);           // number
const str = identity("Hello");      // string

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
            initialCode={`// Generic interface
interface Box<T> {
  value: T;
  isEmpty: boolean;
}

// Generic type alias
type Result<T> = {
  success: boolean;
  data: T;
  message: string;
};

const numberBox: Box<number> = {
  value: 100,
  isEmpty: false
};

const stringBox: Box<string> = {
  value: "TypeScript",
  isEmpty: false
};

const result: Result<number[]> = {
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
            initialCode={`class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
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
            initialCode={`// Constraint: T must have a length property
function logLength<T extends { length: number }>(item: T): void {
  console.log(\`Length: \${item.length}\`);
}

// Constraint: T must extend a base type
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// These work because they have length
logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10, value: "test" });

// Using constrained generic
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
