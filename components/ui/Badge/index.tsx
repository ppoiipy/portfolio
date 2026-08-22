import { HTMLAttributes, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-gray-700 bg-gray-800 text-gray-300",
        outline: "border-gray-700 text-gray-300",
        accent: "border-transparent bg-white text-black"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> { }

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={badgeVariants({ variant, className })}
        {...props}
      />
    )
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants }