import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  title: string;
  variant?: "nature" | "earth" | "glass";
  className?: string;
}

export const LinkButton = ({ href, icon: Icon, title, variant = "glass", className = "" }: LinkButtonProps) => {
  return (
    <Button
      variant={variant}
      size="lg"
      className={`w-full h-14 text-base font-semibold animate-fade-in ${className}`}
      onClick={() => window.open(href, '_blank')}
    >
      <Icon className="w-5 h-5" />
      {title}
    </Button>
  );
};