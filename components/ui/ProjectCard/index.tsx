import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status?: "live" | "in-progress";
}

export function ProjectCard({
  slug,
  title,
  description,
  stack,
  status = "live",
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="transition-colors hover:border-gray-600">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            {status === "in-progress" && (
              <Badge variant="outline">In progress</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}