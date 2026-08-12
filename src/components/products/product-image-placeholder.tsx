import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImagePlaceholder({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-muted-foreground/30 text-muted-foreground",
        className
      )}
    >
      <ImageOff className="size-6" aria-hidden="true" />
      <span className="text-sm">Photos coming soon</span>
    </div>
  );
}
