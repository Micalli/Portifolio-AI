import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        // Variants
        variant === "primary" && "bg-accent text-background hover:bg-[#16B89F] focus:ring-accent/50",
        variant === "secondary" && "bg-secondary/10 text-primary hover:bg-secondary/20 focus:ring-secondary/50",
        variant === "outline" && "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-background focus:ring-accent/50",
        variant === "ghost" && "bg-transparent text-secondary hover:text-primary hover:bg-card/50 focus:ring-primary/20",
        variant === "danger" && "bg-error/10 text-error hover:bg-error/20 hover:shadow-lg hover:shadow-error/10 focus:ring-error/50",
        
        // Sizes
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-11 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        size === "icon" && "h-10 w-10 p-2",
        
        className
      )}
    >
      {isLoading ? <Spinner classname="w-5 h-5" /> : children}
    </button>
  );
}