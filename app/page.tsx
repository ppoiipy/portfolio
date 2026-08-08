import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="p-8 flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger" size="sm">Danger small</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
