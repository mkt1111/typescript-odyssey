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
            initialCode={`// In TypeScript, properties would be: name: string; age: number;
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return \`\${this.name} says Woof!\`;
  }

  getInfo() {
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
            initialCode={`// In TypeScript: public, private, and protected modifiers control access
class BankAccount {
  // In TypeScript: public accountNumber, private balance, protected owner
  constructor(accountNumber, owner, initialBalance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(\`Deposited $\${amount}. New balance: $\${this.balance}\`);
  }

  getBalance() {
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
            initialCode={`// In TypeScript: constructor(public name: string) creates property automatically
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return \`\${this.name} makes a sound\`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name); // Call parent constructor
    this.color = color;
  }

  makeSound() {
    return \`\${this.name} says Meow!\`;
  }

  purr() {
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
            initialCode={`// In TypeScript: static readonly VERSION, readonly id
class Configuration {
  static VERSION = "1.0.0";
  static instanceCount = 0;

  constructor(name) {
    this.id = ++Configuration.instanceCount;
    this.name = name;
  }

  static getVersion() {
    return \`Version \${Configuration.VERSION}\`;
  }

  getInfo() {
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
