import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { Card } from "@/components/ui/card";

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
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">Dog</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">name</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">age</span><span className="text-code-keyword">: number</span>;</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">constructor</span>(<span className="text-foreground">name</span><span className="text-code-keyword">: string</span>, <span className="text-foreground">age</span><span className="text-code-keyword">: number</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.name = name;</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.age = age;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">bark</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${this.name}'} says Woof!`</span>;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">getInfo</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${this.name}'} is ${'${this.age}'} years old`</span>;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Create instances of the class</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">myDog</span> = <span className="text-code-keyword">new</span> Dog(<span className="text-code-string">"Buddy"</span>, <span className="text-code-number">3</span>);</div>
          </div>

          <div className="bg-secondary p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> Classes are blueprints for creating objects. 
              Properties define data, methods define behavior, and constructor initializes new instances.
            </p>
          </div>
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Access Modifiers"
          description="Control property and method visibility with public, private, and protected"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">BankAccount</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">public</span> <span className="text-foreground">accountNumber</span><span className="text-code-keyword">: string</span>; <span className="text-code-comment">// Accessible everywhere</span></div>
            <div className="ml-4"><span className="text-code-keyword">private</span> <span className="text-foreground">balance</span><span className="text-code-keyword">: number</span>; <span className="text-code-comment">// Only inside this class</span></div>
            <div className="ml-4"><span className="text-code-keyword">protected</span> <span className="text-foreground">owner</span><span className="text-code-keyword">: string</span>; <span className="text-code-comment">// This class and subclasses</span></div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">constructor</span>(<span className="text-foreground">accountNumber</span><span className="text-code-keyword">: string</span>, <span className="text-foreground">owner</span><span className="text-code-keyword">: string</span>, <span className="text-foreground">initialBalance</span><span className="text-code-keyword">: number</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.accountNumber = accountNumber;</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.owner = owner;</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.balance = initialBalance;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">public</span> <span className="text-foreground">deposit</span>(<span className="text-foreground">amount</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: void</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.balance += amount;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">public</span> <span className="text-foreground">getBalance</span>()<span className="text-code-keyword">: number</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return this</span>.balance;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
          </div>

          <div className="grid gap-3">
            <Card className="p-4 bg-accent/10 border-accent/30">
              <div className="flex items-start gap-2">
                <span className="text-accent text-xl">✓</span>
                <div className="flex-1">
                  <div className="font-mono text-sm"><span className="text-foreground">account.accountNumber</span> <span className="text-code-comment">// ✓ public</span></div>
                  <div className="font-mono text-sm"><span className="text-foreground">account.getBalance()</span> <span className="text-code-comment">// ✓ public method</span></div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-destructive/10 border-destructive/30">
              <div className="flex items-start gap-2">
                <span className="text-destructive text-xl">❌</span>
                <div className="flex-1">
                  <div className="font-mono text-sm text-foreground mb-1">account.balance</div>
                  <p className="text-sm text-destructive">
                    <strong>Error:</strong> Property 'balance' is private and only accessible within class 'BankAccount'
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </UseCase>

        <UseCase
          title="Inheritance and Super"
          description="Create specialized classes by extending base classes"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Base class</div>
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">Animal</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">constructor</span>(<span className="text-code-keyword">public</span> <span className="text-foreground">name</span><span className="text-code-keyword">: string</span>) {'{}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">makeSound</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${this.name}'} makes a sound`</span>;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Derived class extends Animal</div>
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">Cat</span> <span className="text-code-keyword">extends</span> <span className="text-code-keyword">Animal</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">constructor</span>(<span className="text-foreground">name</span><span className="text-code-keyword">: string</span>, <span className="text-code-keyword">public</span> <span className="text-foreground">color</span><span className="text-code-keyword">: string</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">super</span>(name); <span className="text-code-comment">// Call parent constructor</span></div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4 text-code-comment">// Override parent method</div>
            <div className="ml-4"><span className="text-foreground">makeSound</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${this.name}'} says Meow!`</span>;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4 text-code-comment">// Add new method</div>
            <div className="ml-4"><span className="text-foreground">purr</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${this.name}'} is purring`</span>;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
          </div>

          <div className="bg-secondary p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Use Case:</strong> Inheritance lets you create specialized versions of classes. 
              <code className="text-primary">Cat</code> has all of <code className="text-primary">Animal</code>'s features plus its own.
            </p>
          </div>
        </UseCase>

        <UseCase
          title="Readonly and Static Members"
          description="Create immutable properties and class-level members"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">Configuration</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">static readonly</span> <span className="text-foreground">VERSION</span> = <span className="text-code-string">"1.0.0"</span>; <span className="text-code-comment">// Shared across all instances</span></div>
            <div className="ml-4"><span className="text-code-keyword">static</span> <span className="text-foreground">instanceCount</span> = <span className="text-code-number">0</span>;</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">readonly</span> <span className="text-foreground">id</span><span className="text-code-keyword">: number</span>; <span className="text-code-comment">// Can't change after initialization</span></div>
            <div className="ml-4"><span className="text-foreground">name</span><span className="text-code-keyword">: string</span>;</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">constructor</span>(<span className="text-foreground">name</span><span className="text-code-keyword">: string</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.id = ++Configuration.instanceCount;</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.name = name;</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-code-keyword">static</span> <span className="text-foreground">getVersion</span>()<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">`Version ${'${Configuration.VERSION}'}`</span>;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Access static members on the class itself</div>
            <div>Configuration.getVersion(); <span className="text-code-comment">// "Version 1.0.0"</span></div>
          </div>

          <div className="bg-secondary p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> <code className="text-primary">static</code> members belong to the class, not instances. 
              <code className="text-primary">readonly</code> properties can only be set in the constructor.
            </p>
          </div>
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
