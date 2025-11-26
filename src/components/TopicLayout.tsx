import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface TopicLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function TopicLayout({ title, description, children }: TopicLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-3">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
      {children}
    </div>
  );
}

interface UseCaseProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function UseCase({ title, description, children }: UseCaseProps) {
  return (
    <Card className="p-5 mb-4 bg-card border-border">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-foreground mb-3">{description}</p>
      {children}
    </Card>
  );
}
