import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { CodeEditor } from "@/components/CodeEditor";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Introduction() {
  return (
    <TopicLayout
      title="Introduction to TypeScript"
      description="Discover what TypeScript is, why it exists, and how it revolutionizes JavaScript development"
    >
      <Section title="What is TypeScript?">
        <Card className="p-6 bg-card border-border mb-6">
          <p className="text-lg text-foreground mb-4">
            TypeScript is a <strong className="text-primary">strongly typed programming language</strong> that builds on JavaScript, 
            giving you better tooling at any scale. Developed and maintained by Microsoft, TypeScript is essentially JavaScript 
            with syntax for types.
          </p>
          <p className="text-foreground mb-4">
            TypeScript code compiles to clean, readable JavaScript that runs anywhere JavaScript runs: in a browser, on Node.js, 
            in your apps, and more. It's a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code.
          </p>
          <div className="bg-secondary p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground italic">
              "TypeScript is JavaScript with syntax for types" — TypeScript Official Documentation
            </p>
          </div>
        </Card>

        <UseCase
          title="See the Difference: JavaScript vs TypeScript"
          description="Compare the same code written in JavaScript and TypeScript"
        >
          <CodeEditor
            title="JavaScript - Runtime Errors Waiting to Happen"
            initialCode={`// JavaScript - No type checking
function calculatePrice(price, quantity, discount) {
  const subtotal = price * quantity;
  const discountAmount = subtotal * discount;
  return subtotal - discountAmount;
}

// These will fail at runtime with unexpected results
console.log(calculatePrice("50", "2", 0.1));  // "5050" - string concatenation!
console.log(calculatePrice(50, null, 0.1));   // NaN - multiplying by null
console.log(calculatePrice());                 // NaN - undefined values`}
          />
          
          <div className="my-4" />
          
          <CodeEditor
            title="TypeScript - Catch Errors Before Runtime"
            initialCode={`// TypeScript - Type safety catches errors during development
function calculatePrice(price: number, quantity: number, discount: number): number {
  const subtotal = price * quantity;
  const discountAmount = subtotal * discount;
  return subtotal - discountAmount;
}

// TypeScript would prevent these calls during development:
// calculatePrice("50", "2", 0.1);  // Error: strings not assignable to number
// calculatePrice(50, null, 0.1);   // Error: null not assignable to number
// calculatePrice();                 // Error: missing arguments

// Only valid calls work
console.log(calculatePrice(50, 2, 0.1));  // 90 - correct!
console.log(\`Final price: $\${calculatePrice(100, 3, 0.15)}\`);`}
          />
        </UseCase>
      </Section>

      <Section title="What Problems Does TypeScript Solve?">
        <div className="grid gap-4 mb-6">
          <Card className="p-5 bg-card border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Type Safety</h3>
                <p className="text-foreground">
                  Catches type-related errors during development rather than at runtime, preventing bugs like 
                  accessing properties on undefined, passing wrong argument types, or typos in property names.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Better Developer Experience</h3>
                <p className="text-foreground">
                  Provides intelligent code completion, navigation, and refactoring tools. Your editor knows 
                  exactly what properties and methods are available, making development faster and more confident.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Self-Documenting Code</h3>
                <p className="text-foreground">
                  Types serve as inline documentation, making it clear what data structures look like and 
                  what functions expect. New team members can understand code faster without extensive documentation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Refactoring Confidence</h3>
                <p className="text-foreground">
                  When you need to change your code, TypeScript identifies all the places affected by your changes. 
                  Rename a property or function? TypeScript updates all references and shows you any issues.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Scales with Your Project</h3>
                <p className="text-foreground">
                  As your codebase grows, TypeScript helps manage complexity. It's especially valuable in large 
                  teams where different developers work on interconnected parts of the application.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="What is TypeScript Used For?">
        <Card className="p-6 bg-card border-border mb-4">
          <h3 className="text-xl font-semibold text-primary mb-4">TypeScript is Everywhere</h3>
          <div className="space-y-4 text-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">🌐 Web Applications</h4>
              <p>Frontend frameworks like React, Angular, and Vue have excellent TypeScript support. Many modern web apps 
              are built entirely in TypeScript for improved reliability and developer experience.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">🖥️ Server-Side Development</h4>
              <p>Node.js backend applications, APIs, and microservices benefit from TypeScript's type safety. 
              Frameworks like NestJS are built specifically for TypeScript development.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">📱 Mobile Applications</h4>
              <p>React Native and Ionic apps can be written in TypeScript, bringing type safety to mobile development 
              across iOS and Android platforms.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">🖥️ Desktop Applications</h4>
              <p>Electron apps (like VS Code itself!) use TypeScript to build cross-platform desktop applications 
              with web technologies.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">☁️ Cloud Functions</h4>
              <p>Serverless functions on AWS Lambda, Azure Functions, and Google Cloud Functions are commonly 
              written in TypeScript for better code quality.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">🛠️ Developer Tools</h4>
              <p>Build tools, CLIs, and development utilities are increasingly written in TypeScript to ensure 
              reliability and maintainability.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-secondary border-border">
          <h3 className="text-lg font-semibold text-foreground mb-3">Major Companies Using TypeScript</h3>
          <p className="text-foreground mb-3">
            Some of the world's largest tech companies rely on TypeScript for their critical applications:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-muted-foreground">
            <div className="p-3 bg-background rounded-lg">Microsoft</div>
            <div className="p-3 bg-background rounded-lg">Google</div>
            <div className="p-3 bg-background rounded-lg">Airbnb</div>
            <div className="p-3 bg-background rounded-lg">Slack</div>
            <div className="p-3 bg-background rounded-lg">Asana</div>
            <div className="p-3 bg-background rounded-lg">Lyft</div>
            <div className="p-3 bg-background rounded-lg">Shopify</div>
            <div className="p-3 bg-background rounded-lg">Netflix</div>
          </div>
        </Card>
      </Section>

      <Section title="A Brief History of TypeScript">
        <Card className="p-6 bg-card border-border">
          <div className="space-y-4 text-foreground">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary mb-1">2012 - The Birth</h4>
              <p>TypeScript was first released by Microsoft in October 2012, led by Anders Hejlsberg 
              (creator of C# and Turbo Pascal). The goal was to make JavaScript development more productive 
              for large-scale applications.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary mb-1">2014 - Growing Adoption</h4>
              <p>TypeScript 1.0 was released, bringing stability and enterprise features. Google announced 
              that Angular 2+ would be built with TypeScript, significantly boosting adoption.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary mb-1">2016-2019 - Ecosystem Growth</h4>
              <p>Major frameworks like React, Vue, and Node.js improved TypeScript support. DefinitelyTyped 
              (type definitions for JavaScript libraries) grew to support thousands of packages.</p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-primary mb-1">2020-Present - Industry Standard</h4>
              <p>TypeScript became the default choice for many new projects. According to the State of JS survey, 
              TypeScript consistently ranks as one of the most loved and wanted JavaScript tools, with usage 
              continuing to grow year over year.</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg mt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Today:</strong> TypeScript has over 30 million weekly downloads on npm 
                and is used by millions of developers worldwide. It's maintained by a dedicated team at Microsoft and 
                an active open-source community.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Why Learn TypeScript?">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
          <h3 className="text-xl font-bold text-foreground mb-4">TypeScript is a Career Advantage</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>High Demand:</strong> TypeScript skills are increasingly required in job postings for frontend, 
              backend, and full-stack positions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Better Code Quality:</strong> Write more maintainable code that's easier to understand 
              and less prone to bugs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Future-Proof:</strong> TypeScript adoption continues to grow, and it's becoming the 
              standard for modern JavaScript development.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Easy Transition:</strong> If you know JavaScript, you already know most of TypeScript. 
              You can adopt it gradually in existing projects.</span>
            </li>
          </ul>
        </Card>
      </Section>
    </TopicLayout>
  );
}
