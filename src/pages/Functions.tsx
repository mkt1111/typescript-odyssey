import { TopicLayout, Section, UseCase } from "@/components/TopicLayout";
import { Card } from "@/components/ui/card";

export default function Functions() {
  return (
    <TopicLayout
      title="Functions"
      description="Master function typing, parameters, and return values in TypeScript"
    >
      <Section title="Function Type Annotations">
        <UseCase
          title="Parameter and Return Types"
          description="Explicitly defining what goes in and what comes out of functions"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Function with typed parameters and return type</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">add</span>(<span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: number</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> a + b;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Arrow function with types</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">multiply</span> = (<span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: number</span> {'=> {'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> a * b;</div>
            <div>{'}'};</div>
            
            <div className="mt-3 text-code-comment">// Function with no return value (void)</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">logMessage</span>(<span className="text-foreground">message</span><span className="text-code-keyword">: string</span>)<span className="text-code-keyword">: void</span> {'{'}</div>
            <div className="ml-4">console.log(message);</div>
            <div>{'}'}</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">add(</span><span className="text-code-number">42</span>, <span className="text-code-number">1</span><span className="text-foreground">)</span> <span className="text-code-comment">// 43 - The answer!</span></div>
              <div><span className="text-foreground">multiply(</span><span className="text-code-number">6</span>, <span className="text-code-number">9</span><span className="text-foreground">)</span> <span className="text-code-comment">// 54 - Definitely not 42</span></div>
              <div><span className="text-foreground">logMessage(</span><span className="text-code-string">"Don't Panic!"</span><span className="text-foreground">)</span> <span className="text-code-comment">// Logs: Don't Panic!</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Key Point:</strong> The <code className="text-primary">: type</code> after parameters specifies what type is expected. 
              The <code className="text-primary">: type</code> after parentheses specifies what the function returns.
            </p>
          </div>
        </UseCase>
      </Section>

      <Section title="Common Use Cases">
        <UseCase
          title="Optional and Default Parameters"
          description="Handle flexible function arguments with optional and default values"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Optional parameter (marked with ?)</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">greet</span>(<span className="text-foreground">name</span><span className="text-code-keyword">: string</span>, <span className="text-foreground">greeting</span><span className="text-code-keyword">?: string</span>)<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${greeting || "Hello"}'}, ${'${name}'}!`</span>;</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Default parameter value</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">power</span>(<span className="text-foreground">base</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">exponent</span><span className="text-code-keyword">: number</span> = <span className="text-code-number">2</span>)<span className="text-code-keyword">: number</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> Math.pow(base, exponent);</div>
            <div>{'}'}</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">greet(</span><span className="text-code-string">"Arthur Dent"</span><span className="text-foreground">)</span> <span className="text-code-comment">// "Hello, Arthur Dent!"</span></div>
              <div><span className="text-foreground">greet(</span><span className="text-code-string">"Zaphod"</span>, <span className="text-code-string">"Greetings"</span><span className="text-foreground">)</span> <span className="text-code-comment">// "Greetings, Zaphod!"</span></div>
              <div><span className="text-foreground">power(</span><span className="text-code-number">6</span>, <span className="text-code-number">7</span><span className="text-foreground">)</span> <span className="text-code-comment">// 279936 - The number of shrubberies required</span></div>
              <div><span className="text-foreground">power(</span><span className="text-code-number">3</span><span className="text-foreground">)</span> <span className="text-code-comment">// 9 (uses default exponent of 2)</span></div>
            </div>
          </Card>
        </UseCase>

        <UseCase
          title="Rest Parameters"
          description="Work with variable numbers of arguments using rest parameters"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border">
            <div className="text-code-comment">// Rest parameter collects remaining arguments into an array</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">sum</span>(<span className="text-foreground">...numbers</span><span className="text-code-keyword">: number[]</span>)<span className="text-code-keyword">: number</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> numbers.reduce((total, n) {'=> total + n'}, <span className="text-code-number">0</span>);</div>
            <div>{'}'}</div>
            
            <div className="mt-3 text-code-comment">// Mixing fixed and rest parameters</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">introduce</span>(<span className="text-foreground">greeting</span><span className="text-code-keyword">: string</span>, <span className="text-foreground">...names</span><span className="text-code-keyword">: string[]</span>)<span className="text-code-keyword">: string</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> <span className="text-code-string">`${'${greeting}'} ${'${names.join(", ")}'}!`</span>;</div>
            <div>{'}'}</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">sum(</span><span className="text-code-number">1</span>, <span className="text-code-number">2</span>, <span className="text-code-number">5</span><span className="text-foreground">)</span> <span className="text-code-comment">// 8 - Spam count</span></div>
              <div><span className="text-foreground">sum(</span><span className="text-code-number">42</span><span className="text-foreground">)</span> <span className="text-code-comment">// 42 - Life, universe, everything</span></div>
              <div><span className="text-foreground">introduce(</span><span className="text-code-string">"I am"</span>, <span className="text-code-string">"Brian"</span>, <span className="text-code-string">"of Nazareth"</span><span className="text-foreground">)</span> <span className="text-code-comment">// "I am Brian, of Nazareth!"</span></div>
            </div>
          </Card>
        </UseCase>

        <UseCase
          title="Function Type Aliases"
          description="Create reusable function type definitions for consistency"
        >
          <div className="bg-code-bg p-4 rounded-lg font-mono text-sm border border-border mb-4">
            <div className="text-code-comment">// Define a reusable function type</div>
            <div><span className="text-code-keyword">type</span> <span className="text-code-keyword">MathOperation</span> = (<span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>) {'=> number'};</div>
            
            <div className="mt-3 text-code-comment">// Functions that match this type</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">add</span><span className="text-code-keyword">: MathOperation</span> = (<span className="text-foreground">a</span>, <span className="text-foreground">b</span>) {'=> a + b'};</div>
            <div><span className="text-code-keyword">const</span> <span className="text-foreground">subtract</span><span className="text-code-keyword">: MathOperation</span> = (<span className="text-foreground">a</span>, <span className="text-foreground">b</span>) {'=> a - b'};</div>
            
            <div className="mt-3 text-code-comment">// Higher-order function using the type</div>
            <div><span className="text-code-keyword">function</span> <span className="text-foreground">calculate</span>(<span className="text-foreground">op</span><span className="text-code-keyword">: MathOperation</span>, <span className="text-foreground">a</span><span className="text-code-keyword">: number</span>, <span className="text-foreground">b</span><span className="text-code-keyword">: number</span>)<span className="text-code-keyword">: number</span> {'{'}</div>
            <div className="ml-4"><span className="text-code-keyword">return</span> op(a, b);</div>
            <div>{'}'}</div>
          </div>

          <Card className="p-4 bg-accent/10 border-accent/30 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Example Usage:</h4>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-foreground">calculate(add, </span><span className="text-code-number">40</span>, <span className="text-code-number">2</span><span className="text-foreground">)</span> <span className="text-code-comment">// 42 - The Ultimate Answer</span></div>
              <div><span className="text-foreground">calculate(subtract, </span><span className="text-code-number">100</span>, <span className="text-code-number">58</span><span className="text-foreground">)</span> <span className="text-code-comment">// 42 - Still the answer</span></div>
            </div>
          </Card>

          <div className="bg-secondary p-3 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Use Case:</strong> Function type aliases are perfect for callback patterns, 
              event handlers, and ensuring multiple functions share the same signature.
            </p>
          </div>
        </UseCase>
      </Section>
    </TopicLayout>
  );
}
