import { cn } from "~/lib/utils";

export type BadgeVariant = "default" | "success" | "warning" | "info" | "error";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "bg-primary/10 text-primary px-2 py-1 rounded-md inline-flex text-xs font-semibold",
        variant === "default" && "rounded-full",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800",
        variant === "info" && "bg-blue-100 text-blue-800",
        variant === "error" && "bg-red-100 text-red-800",
        className
      )}
    >
      {children}
    </div>
  );
}
