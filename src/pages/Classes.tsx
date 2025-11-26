import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";

export default function Classes() {
  return (
    <TopicLayout
      title="Classes"
      description="Object-oriented programming with TypeScript classes, properties, and methods"
    >
      <Section title="Basic Class Structure">
        <UseCase
          title="Class Definition and Instances"
          description="Create blueprints for objects with properties and methods"
        >
          <CodeEditor
            title="Basic Class"
            initialCode={`class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark(): string {
    return \`\${this.name} says Woof!\`;
  }

  getInfo(): string {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

const myDog = new Dog("Buddy", 3);
console.log(myDog.bark());
console.log(myDog.getInfo());`}
          />
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Access Modifiers"
          description="Control property and method visibility with public, private, and protected"
        >
          <CodeEditor
            title="Access Control"
            initialCode={`class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected owner: string;

  constructor(accountNumber: string, owner: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(\`Deposited $\${amount}. New balance: $\${this.balance}\`);
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("12345", "Alice", 1000);
account.deposit(500);
console.log(\`Account: \${account.accountNumber}\`);
console.log(\`Balance: $\${account.getBalance()}\`);`}
          />
        </UseCase>

        <UseCase
          title="Inheritance and Super"
          description="Create specialized classes by extending base classes"
        >
          <CodeEditor
            title="Class Inheritance"
            initialCode={`class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return \`\${this.name} makes a sound\`;
  }
}

class Cat extends Animal {
  constructor(name: string, public color: string) {
    super(name); // Call parent constructor
  }

  makeSound(): string {
    return \`\${this.name} says Meow!\`;
  }

  purr(): string {
    return \`\${this.name} is purring\`;
  }
}

const cat = new Cat("Whiskers", "orange");
console.log(cat.makeSound());
console.log(cat.purr());
console.log(\`Color: \${cat.color}\`);`}
          />
        </UseCase>

        <UseCase
          title="Readonly and Static Members"
          description="Create immutable properties and class-level members"
        >
          <CodeEditor
            title="Readonly and Static"
            initialCode={`class Configuration {
  static readonly VERSION = "1.0.0";
  static instanceCount = 0;
  
  readonly id: number;
  name: string;

  constructor(name: string) {
    this.id = ++Configuration.instanceCount;
    this.name = name;
  }

  static getVersion(): string {
    return \`Version \${Configuration.VERSION}\`;
  }

  getInfo(): string {
    return \`Config #\${this.id}: \${this.name}\`;
  }
}

console.log(Configuration.getVersion());
const config1 = new Configuration("Production");
const config2 = new Configuration("Development");
console.log(config1.getInfo());
console.log(config2.getInfo());
console.log(\`Total instances: \${Configuration.instanceCount}\`);`}
          />
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
