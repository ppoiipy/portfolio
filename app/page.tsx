import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger" size="sm">Danger small</Button>
          <Button disabled>Disabled</Button>
        </div>
          <Card className="mt-8 max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        <div className="mt-8 flex gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="accent">Accent</Badge>
        </div>
        <div className="mt-8 max-w-sm">
          <ProjectCard
            slug="this-portfolio"
            title="This portfolio"
            description="Built in public — the site itself is Case Study #1."
            stack={["Next.js", "TypeScript", "Tailwind"]}
            status="in-progress"
          />
        </div>
        <div className="mt-8 max-w-2xl">
          <CodeBlock
            code={`export function Button({ children }: { children: React.ReactNode }) {\n  return <button>{children}</button>;\n}`}
            language="tsx"
          />
        </div>
      </div>
    </>
  );
}
