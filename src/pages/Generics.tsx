import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { Card } from "@/components/ui/card";

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
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Generic function with type parameter T</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">identity</span>&lt;<span className="text-code-keyword">T</span>&gt;(<span className="text-foreground">value</span><span className="text-code-keyword">: T</span>)<span className="text-code-keyword">: T</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> value;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Generic array function</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">firstElement</span>&lt;<span className="text-code-keyword">T</span>&gt;(<span className="text-foreground">arr</span><span className="text-code-keyword">: T[]</span>)<span className="text-code-keyword">: T | undefined</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> arr[<span className="text-code-number">0</span>];</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// TypeScript infers the type automatically</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">num</span> = identity(<span className="text-code-number">42</span>); <span className="text-code-comment">// T is inferred as number</span></div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">str</span> = identity(<span className="text-code-string">"Hello"</span>); <span className="text-code-comment">// T is inferred as string</span></div>
            
            <div className="mt-3"><span className="text-code-keyword">const</span> <span className="text-foreground">firstNum</span> = firstElement([<span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">3</span>]); <span className="text-code-comment">// number | undefined</span></div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">firstName</span> = firstElement([<span className="text-code-string">"Alice"</span>, <span className="text-code-string">"Bob"</span>]); <span className="text-code-comment">// string | undefined</span></div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Results:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">num</span> <span className="text-code-comment">// 42 - Still a number</span></div>
              <div><span className="text-foreground">str</span> <span className="text-code-comment">// "Hello" - Still a string</span></div>
              <div><span className="text-foreground">firstNum</span> <span className="text-code-comment">// 1 - Type is number | undefined</span></div>
              <div><span className="text-foreground">firstName</span> <span className="text-code-comment">// "Alice" - Not expecting the Spanish Inquisition!</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> The <code className="text-primary">&lt;T&gt;</code> is a type parameter - a placeholder for a type that's determined when the function is called. This lets one function work with many types safely.
            </p>
          </div>
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Generic Interfaces and Types"
          description="Define reusable data structures that work with any type"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Generic interface</div>
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">Box</span>&lt;<span className="text-code-keyword">T</span>&gt; {'{'}</div>
            <div className="ml-4"><span className="text-foreground">value</span><span className="text-code-keyword">: T</span>;</div>
            <div className="ml-4"><span className="text-foreground">isEmpty</span><span className="text-code-keyword">: boolean</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Generic type alias</div>
            <div><span className="text-code-keyword">type</span> <span className="text-code-keyword">Result</span>&lt;<span className="text-code-keyword">T</span>&gt; = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">success</span><span className="text-code-keyword">: boolean</span>;</div>
            <div className="ml-4"><span className="text-foreground">data</span><span className="text-code-keyword">: T</span>;</div>
            <div className="ml-4"><span className="text-foreground">message</span><span className="text-code-keyword">: string</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Using the generic types</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">numberBox</span><span className="text-code-keyword">: Box&lt;number&gt;</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">value</span>: <span className="text-code-number">100</span>,</div>
            <div className="ml-4"><span className="text-foreground">isEmpty</span>: <span className="text-code-keyword">false</span></div>
            <div>{'}'};</div>
            
            <div className="mt-3"><span className="text-code-keyword">const</span> <span className="text-foreground">stringBox</span><span className="text-code-keyword">: Box&lt;string&gt;</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">value</span>: <span className="text-code-string">"TypeScript"</span>,</div>
            <div className="ml-4"><span className="text-foreground">isEmpty</span>: <span className="text-code-keyword">false</span></div>
            <div>{'}'};</div>
            
            <div className="mt-3"><span className="text-code-keyword">const</span> <span className="text-foreground">result</span><span className="text-code-keyword">: Result&lt;number[]&gt;</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">success</span>: <span className="text-code-keyword">true</span>,</div>
            <div className="ml-4"><span className="text-foreground">data</span>: [<span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">3</span>],</div>
            <div className="ml-4"><span className="text-foreground">message</span>: <span className="text-code-string">"Data loaded"</span></div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Values:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">numberBox.value</span> <span className="text-code-comment">// 100</span></div>
              <div><span className="text-foreground">stringBox.value</span> <span className="text-code-comment">// "TypeScript" - Don't Panic!</span></div>
              <div><span className="text-foreground">result.data</span> <span className="text-code-comment">// [1, 2, 3] - Array of numbers</span></div>
              <div><span className="text-foreground">result.success</span> <span className="text-code-comment">// true - No shrubbery needed</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Use Case:</strong> Generic interfaces are perfect for containers, wrappers, and API response types that can hold different data types.
            </p>
          </div>
        </UseCase>

        <UseCase
          title="Generic Classes"
          description="Build flexible class implementations that work with multiple types"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div><span className="text-code-keyword">class</span> <span className="text-code-keyword">Stack</span>&lt;<span className="text-code-keyword">T</span>&gt; {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">private</span> <span className="text-foreground">items</span><span className="text-code-keyword">: T[]</span> = [];</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">push</span>(<span className="text-foreground">item</span><span className="text-code-keyword">: T</span>)<span className="text-code-keyword">: void</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">this</span>.items.push(item);</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">pop</span>()<span className="text-code-keyword">: T | undefined</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return this</span>.items.pop();</div>
            <div className="ml-4">{'}'}</div>
            
            <div className="mt-3 ml-4"><span className="text-foreground">peek</span>()<span className="text-code-keyword">: T | undefined</span> {'{'}</div>
            <div className="ml-8"><span className="text-code-keyword">return this</span>.items[<span className="text-code-keyword">this</span>.items.length - <span className="text-code-number">1</span>];</div>
            <div className="ml-4">{'}'}</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Create typed stacks</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">numberStack</span> = <span className="text-code-keyword">new</span> Stack&lt;<span className="text-code-keyword">number</span>&gt;();</div>
            <div>numberStack.push(<span className="text-code-number">10</span>); <span className="text-code-comment">// ✓ OK</span></div>
            <div className="text-code-comment">// numberStack.push("hello"); // ❌ Error: string not assignable to number</div>
            
            <div className="mt-3"><span className="text-code-keyword">const</span> <span className="text-foreground">stringStack</span> = <span className="text-code-keyword">new</span> Stack&lt;<span className="text-code-keyword">string</span>&gt;();</div>
            <div>stringStack.push(<span className="text-code-string">"hello"</span>); <span className="text-code-comment">// ✓ OK</span></div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">numberStack.push(</span><span className="text-code-number">42</span><span className="text-foreground">)</span> <span className="text-code-comment">// Stack: [10, 42]</span></div>
              <div><span className="text-foreground">numberStack.peek()</span> <span className="text-code-comment">// 42 - Top of stack</span></div>
              <div><span className="text-foreground">stringStack.push(</span><span className="text-code-string">"Knights of Ni"</span><span className="text-foreground">)</span> <span className="text-code-comment">// Stack: ["hello", "Knights of Ni"]</span></div>
              <div><span className="text-foreground">stringStack.pop()</span> <span className="text-code-comment">// "Knights of Ni" - Removed from stack</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Real-World Example:</strong> Generic classes power data structures like arrays, maps, sets, and custom collections in TypeScript's standard library.
            </p>
          </div>
        </UseCase>

        <UseCase
          title="Generic Constraints"
          description="Limit generic types to those with specific properties or capabilities"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// T must have a length property</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">logLength</span>&lt;<span className="text-code-keyword">T extends</span> {'{'} <span className="text-foreground">length</span><span className="text-code-keyword">: number</span> {'}'}&gt;(<span className="text-foreground">item</span><span className="text-code-keyword">: T</span>)<span className="text-code-keyword">: void</span> {'{'}</div>
            <div className="ml-4">console.log(<span className="text-code-string">`Length: ${'${item.length}'}`</span>);</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// T must extend HasId interface</div>
            <div><span className="text-code-keyword">interface</span> <span className="text-code-keyword">HasId</span> {'{'}</div>
            <div className="ml-4"><span className="text-foreground">id</span><span className="text-code-keyword">: number</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3"><span className="text-code-keyword">function</span> <span className="text-foreground">findById</span>&lt;<span className="text-code-keyword">T extends HasId</span>&gt;(<span className="text-foreground">items</span><span className="text-code-keyword">: T[]</span>, <span className="text-foreground">id</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: T | undefined</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> items.find(<span className="text-foreground">item</span> {'=> item.id === id'});</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// These work because they have length</div>
            <div>logLength(<span className="text-code-string">"Hello"</span>); <span className="text-code-comment">// ✓ strings have length</span></div>
            <div>logLength([<span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">3</span>]); <span className="text-code-comment">// ✓ arrays have length</span></div>
            <div className="text-code-comment">// logLength(42); // ❌ Error: numbers don't have length</div>
            
            <div className="mt-3 text-code-comment">// Using constrained generic</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">users</span> = [</div>
            <div className="ml-4">{'{'} <span className="text-foreground">id</span>: <span className="text-code-number">1</span>, <span className="text-foreground">name</span>: <span className="text-code-string">"Alice"</span> {'}'},</div>
            <div className="ml-4">{'{'} <span className="text-foreground">id</span>: <span className="text-code-number">2</span>, <span className="text-foreground">name</span>: <span className="text-code-string">"Bob"</span> {'}'}</div>
            <div>];</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">found</span> = findById(users, <span className="text-code-number">2</span>); <span className="text-code-comment">// Works! Users have id property</span></div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Output:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">logLength(</span><span className="text-code-string">"Hello"</span><span className="text-foreground">)</span> <span className="text-code-comment">// Logs: "Length: 5"</span></div>
              <div><span className="text-foreground">logLength([</span><span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">3</span><span className="text-foreground">])</span> <span className="text-code-comment">// Logs: "Length: 3"</span></div>
              <div><span className="text-foreground">found?.name</span> <span className="text-code-comment">// "Bob" - Found in the universe!</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> Constraints (<code className="text-primary">extends</code>) let you ensure generic types have the properties or methods you need. 
              This gives you type safety while maintaining flexibility.
            </p>
          </div>
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
