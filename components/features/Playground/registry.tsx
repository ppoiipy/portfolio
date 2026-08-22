import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

export type ControlConfig =
  | { type: "select"; propName: string; label: string; options: string[] }
  | { type: "boolean"; propName: string; label: string }

export const registry = {
  Button: {
    component: Button,
    children: "Click me",
    controls: [
      { type: "select", propName: "variant", label: "Variant", options: ["primary", "secondary", "danger"] },
      { type: "select", propName: "size", label: "Size", options: ["sm", "md", "lg"] },
      { type: "boolean", propName: "disabled", label: "Disabled" },
    ] as ControlConfig[],
    defaultProps: { variant: "primary", size: "md", disabled: false },
  },
  Badge: {
    component: Badge,
    children: "Badge",
    controls: [
      { type: "select", propName: "variant", label: "Variant", options: ["default", "outline", "accent"] },
    ] as ControlConfig[],
    defaultProps: { variant: "default" },
  }
} as const

export type ComponentName = keyof typeof registry;