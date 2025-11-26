import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { Card } from "@/components/ui/card";

export default function BasicTypes() {
  return (
    <TopicLayout
      title="Basic Types"
      description="Learn the fundamental building blocks of TypeScript's type system"
    >
      <Section title="Core Primitive Types">
        <Card className="p-6 bg-card border-border mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Numbers, Strings, and Booleans</h3>
          <p className="text-muted-foreground mb-4">
            The most common types you'll use in TypeScript for basic values
          </p>
          
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm mb-4 border border-border">
            <div className="text-code-comment">// Number type</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">age</span><span className="text-code-keyword">: number</span> = <span className="text-code-number">25</span>;</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">price</span><span className="text-code-keyword">: number</span> = <span className="text-code-number">99.99</span>;</div>
            <div className="mt-3 text-code-comment">// String type</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">name</span><span className="text-code-keyword">: string</span> = <span className="text-code-string">"TypeScript"</span>;</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">greeting</span><span className="text-code-keyword">: string</span> = <span className="text-code-string">`Hello, ${'${name}'}!`</span>;</div>
            <div className="mt-3 text-code-comment">// Boolean type</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">isActive</span><span className="text-code-keyword">: boolean</span> = <span className="text-code-keyword">true</span>;</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">hasPermission</span><span className="text-code-keyword">: boolean</span> = <span className="text-code-keyword">false</span>;</div>
          </div>

          <div className="bg-secondary p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> Type annotations come after the variable name with a colon. 
              TypeScript will enforce that these variables only hold values of their specified type.
            </p>
          </div>
        </Card>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Arrays and Typed Collections"
          description="Working with collections of data with type safety"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border">
            <div className="text-code-comment">// Array of numbers</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">scores</span><span className="text-code-keyword">: number[]</span> = [<span className="text-code-number">95</span>, <span className="text-code-number">87</span>, <span className="text-code-number">92</span>, <span className="text-code-number">88</span>];</div>
            <div className="mt-3 text-code-comment">// Array of strings</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">fruits</span><span className="text-code-keyword">: string[]</span> = [<span className="text-code-string">"apple"</span>, <span className="text-code-string">"banana"</span>, <span className="text-code-string">"orange"</span>];</div>
            <div className="mt-3 text-code-comment">// Alternative array syntax using generics</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">colors</span><span className="text-code-keyword">: Array&lt;string&gt;</span> = [<span className="text-code-string">"red"</span>, <span className="text-code-string">"green"</span>, <span className="text-code-string">"blue"</span>];</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">scores.push(</span><span className="text-code-number">42</span><span className="text-foreground">)</span> <span className="text-code-comment">// ✓ [95, 87, 92, 88, 42]</span></div>
              <div><span className="text-foreground">fruits[</span><span className="text-code-number">0</span><span className="text-foreground">]</span> <span className="text-code-comment">// "apple"</span></div>
              <div><span className="text-foreground">colors.length</span> <span className="text-code-comment">// 3 - the magic number</span></div>
            </div>
          </Card>
        </UseCase>

        <UseCase
          title="Object Types"
          description="Defining structured data with inline type annotations"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border">
            <div className="text-code-comment">// Inline object type definition</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">user</span>: {'{'} <span className="text-foreground">name</span><span className="text-code-keyword">: string</span>; <span className="text-foreground">age</span><span className="text-code-keyword">: number</span>; <span className="text-foreground">active</span><span className="text-code-keyword">: boolean</span> {'}'} = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">name</span>: <span className="text-code-string">"Alice"</span>,</div>
            <div className="ml-4"><span className="text-foreground">age</span>: <span className="text-code-number">30</span>,</div>
            <div className="ml-4"><span className="text-foreground">active</span>: <span className="text-code-keyword">true</span></div>
            <div>{'}'};</div>
            <div className="mt-3 text-code-comment">// Object with optional properties (note the ?)</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">config</span>: {'{'} <span className="text-foreground">theme</span><span className="text-code-keyword">: string</span>; <span className="text-foreground">debug</span><span className="text-code-keyword">?: boolean</span> {'}'} = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">theme</span>: <span className="text-code-string">"dark"</span></div>
            <div className="ml-4 text-code-comment">// debug is optional - can be omitted</div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">user.name</span> <span className="text-code-comment">// "Alice"</span></div>
              <div><span className="text-foreground">user.age</span> <span className="text-code-comment">// 30</span></div>
              <div><span className="text-foreground">config.theme</span> <span className="text-code-comment">// "dark" - Much better than "light"!</span></div>
              <div><span className="text-foreground">config.debug</span> <span className="text-code-comment">// undefined (optional property not set)</span></div>
            </div>
          </Card>
        </UseCase>

        <UseCase
          title="Type Annotations vs Inference"
          description="Understanding when TypeScript can infer types automatically"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Explicit type annotation</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">explicitNumber</span><span className="text-code-keyword">: number</span> = <span className="text-code-number">42</span>;</div>
            <div className="mt-3 text-code-comment">// Type inference - TypeScript automatically knows this is number</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">inferredNumber</span> = <span className="text-code-number">42</span>;</div>
            <div className="mt-3 text-code-comment">// Array inference - TypeScript knows: number[]</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">numbers</span> = [<span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">3</span>];</div>
            <div className="mt-3 text-code-comment">// Object inference - TypeScript infers the complete shape</div>
            <div><span className="text-code-keyword">let</span> <span className="text-foreground">person</span> = {'{'}</div>
            <div className="ml-4"><span className="text-foreground">name</span>: <span className="text-code-string">"Bob"</span>,</div>
            <div className="ml-4"><span className="text-foreground">age</span>: <span className="text-code-number">25</span></div>
            <div>{'}'};</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Values:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">explicitNumber</span> <span className="text-code-comment">// 42 - The Answer to Life, Universe, and Everything</span></div>
              <div><span className="text-foreground">inferredNumber</span> <span className="text-code-comment">// 42 - TypeScript knows it's a number</span></div>
              <div><span className="text-foreground">numbers[1]</span> <span className="text-code-comment">// 2 - Inferred as number[]</span></div>
              <div><span className="text-foreground">person.name</span> <span className="text-code-comment">// "Bob"</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Best Practice:</strong> Let TypeScript infer types when it's obvious. 
              Add explicit annotations for function parameters, return types, and complex structures.
            </p>
          </div>
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
