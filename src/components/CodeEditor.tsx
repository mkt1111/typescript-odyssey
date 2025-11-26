import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface CodeEditorProps {
  initialCode: string;
  title?: string;
}

export function CodeEditor({ initialCode, title }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const { toast } = useToast();

  const runCode = () => {
    try {
      // Create a mock console.log that captures output
      const logs: string[] = [];
      const mockConsole = {
        log: (...args: any[]) => logs.push(args.map(String).join(" ")),
      };

      // Execute the TypeScript code (simplified - just runs as JS)
      const func = new Function("console", code);
      func(mockConsole);
      
      setOutput(logs.join("\n") || "Code executed successfully (no output)");
      toast({
        title: "Success",
        description: "Code executed successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: ${errorMessage}`);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    toast({
      title: "Reset",
      description: "Code reset to sample",
    });
  };

  return (
    <Card className="p-4 bg-card border-border">
      {title && <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>}
      <div className="border border-border rounded-lg overflow-hidden mb-3">
        <Editor
          height="300px"
          defaultLanguage="typescript"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
      
      <div className="flex gap-2 mb-3">
        <Button onClick={runCode} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Play className="h-4 w-4 mr-2" />
          Run Code
        </Button>
        <Button onClick={resetCode} variant="secondary">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {output && (
        <Card className="p-3 bg-code-bg border-border">
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Output:</h4>
          <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">{output}</pre>
        </Card>
      )}
    </Card>
  );
}
