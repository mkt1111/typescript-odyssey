import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { Card } from "@/components/ui/card";

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
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Define an interface</div>
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">User</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">id</span><span className="text-code-keyword">: number</span>;</div>
            <div className="ml-4"><span className="text-foreground">name</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">email</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">active</span><span className="text-code-keyword">: boolean</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Object must match the interface</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">user</span><span className="text-code-keyword">: User</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">id</span>: <span className="text-code-number">1</span>,</div>
            <div className="ml-4"><span className="text-foreground">name</span>: <span className="text-code-string">"Alice"</span>,</div>
            <div className="ml-4"><span className="text-foreground">email</span>: <span className="text-code-string">"alice@example.com"</span>,</div>
            <div className="ml-4"><span className="text-foreground">active</span>: <span className="text-code-keyword">true</span></div>
            <div>{'}'};</div>
            
            <div className="mt-3 text-code-comment">// Function parameter using interface</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">displayUser</span>(<span className="text-foreground">u</span><span className="text-code-keyword">: User</span>)<span className="text-code-keyword">: void</span> {'{'}</div>
            <div className="ml-4">console.log(<span className="text-code-string">`User: ${'${u.name}'} (${'${u.email}'})`</span>);</div>
            <div>{'}'}</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">user.name</span> <span className="text-code-comment">// "Alice"</span></div>
              <div><span className="text-foreground">user.email</span> <span className="text-code-comment">// "alice@example.com"</span></div>
              <div><span className="text-foreground">displayUser(user)</span> <span className="text-code-comment">// Logs: "User: Alice (alice@example.com)"</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> Interfaces create a contract - any object claiming to be a <code className="text-primary">User</code> must have all required properties with the correct types.
            </p>
          </div>
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Optional and Readonly Properties"
          description="Control which properties are required and which can be modified"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">Product</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">readonly</span> <span className="text-foreground">id</span><span className="text-code-keyword">: number</span>; <span className="text-code-comment">// Cannot be changed after creation</span></div>
            <div className="ml-4"><span className="text-foreground">name</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">price</span><span className="text-code-keyword">: number</span>;</div>
            <div className="ml-4"><span className="text-foreground">description</span><span className="text-code-keyword">?: string</span>; <span className="text-code-comment">// Optional property</span></div>
            <div className="ml-4"><span className="text-foreground">inStock</span><span className="text-code-keyword">?: boolean</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3"><span className="text-code-keyword">const</span> <span className="text-foreground">laptop</span><span className="text-code-keyword">: Product</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">id</span>: <span className="text-code-number">101</span>,</div>
            <div className="ml-4"><span className="text-foreground">name</span>: <span className="text-code-string">"Laptop Pro"</span>,</div>
            <div className="ml-4"><span className="text-foreground">price</span>: <span className="text-code-number">1299.99</span></div>
            <div className="ml-4 text-code-comment">// description and inStock are optional</div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-destructive/10 border-destructive/30 mb-3">
            <div className="flex items-start gap-3">
              <span className="text-destructive text-xl">❌</span>
              <div>
                <code className="text-sm text-foreground">laptop.id = 102;</code>
                <p className="text-sm text-destructive mt-1">
                  <strong>Error:</strong> Cannot assign to 'id' because it is a read-only property
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-3">
              <span className="text-accent text-xl">✓</span>
              <div>
                <code className="text-sm text-foreground">laptop.price = 1199.99;</code>
                <p className="text-sm text-accent mt-1">
                  <strong>Valid:</strong> Regular properties can be modified
                </p>
              </div>
            </div>
          </Card>
        </UseCase>

        <UseCase
          title="Interface Extension"
          description="Build complex interfaces by extending simpler ones"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Base interface</div>
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">Person</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">name</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">age</span><span className="text-code-keyword">: number</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Extended interface inherits Person properties and adds more</div>
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">Employee</span> <span className="text-code-keyword">extends</span> <span className="text-code-keyword">Person</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">employeeId</span><span className="text-code-keyword">: number</span>;</div>
            <div className="ml-4"><span className="text-foreground">department</span><span className="text-code-keyword">: string</span>;</div>
            <div className="ml-4"><span className="text-foreground">salary</span><span className="text-code-keyword">: number</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Employee must have ALL properties from Person AND Employee</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">employee</span><span className="text-code-keyword">: Employee</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">name</span>: <span className="text-code-string">"Bob Smith"</span>,</div>
            <div className="ml-4"><span className="text-foreground">age</span>: <span className="text-code-number">32</span>,</div>
            <div className="ml-4"><span className="text-foreground">employeeId</span>: <span className="text-code-number">5001</span>,</div>
            <div className="ml-4"><span className="text-foreground">department</span>: <span className="text-code-string">"Engineering"</span>,</div>
            <div className="ml-4"><span className="text-foreground">salary</span>: <span className="text-code-number">95000</span></div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">employee.name</span> <span className="text-code-comment">// "Bob Smith" - From Person</span></div>
              <div><span className="text-foreground">employee.employeeId</span> <span className="text-code-comment">// 5001 - From Employee</span></div>
              <div><span className="text-foreground">employee.department</span> <span className="text-code-comment">// "Engineering"</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Use Case:</strong> Interface extension is perfect for creating specialized types. 
              You can extend multiple interfaces to combine their properties.
            </p>
          </div>
        </UseCase>

        <UseCase
          title="Function Signatures in Interfaces"
          description="Interfaces can define required methods and their signatures"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border">
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">Calculator</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">currentValue</span><span className="text-code-keyword">: number</span>;</div>
            <div className="ml-4"><span className="text-foreground">add</span>(<span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: number</span>;</div>
            <div className="ml-4"><span className="text-foreground">subtract</span>(<span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: number</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Object implementing the interface</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">calc</span><span className="text-code-keyword">: Calculator</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">currentValue</span>: <span className="text-code-number">0</span>,</div>
            <div className="ml-4"><span className="text-foreground">add</span>(<span className="text-foreground">a</span>, <span className="text-foreground">b</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.currentValue = a + b;</div>
            <div className="ml-8"><span className="text-code-keyword">return this</span>.currentValue;</div>
            <div className="ml-4">{'}'},</div>
            <div className="ml-4"><span className="text-foreground">subtract</span>(<span className="text-foreground">a</span>, <span className="text-foreground">b</span>) {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.currentValue = a - b;</div>
            <div className="ml-8"><span className="text-code-keyword">return this</span>.currentValue;</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">calc.add(</span><span className="text-code-number">40</span>, <span className="text-code-number">2</span><span className="text-foreground">)</span> <span className="text-code-comment">// 42 - The Ultimate Answer</span></div>
              <div><span className="text-foreground">calc.subtract(</span><span className="text-code-number">50</span>, <span className="text-code-number">8</span><span className="text-foreground">)</span> <span className="text-code-comment">// 42 - Still 42!</span></div>
              <div><span className="text-foreground">calc.currentValue</span> <span className="text-code-comment">// 42 - Meaning of Life confirmed</span></div>
            </div>
          </Card>
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
