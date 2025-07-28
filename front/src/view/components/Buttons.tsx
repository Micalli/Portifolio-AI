import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "danger" | "ghost";
}


export function Button({
  className,
  isLoading,
  disabled,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "p-2 cursor-pointer disabled:cursor-not-allowed bg-accent rounded-4xl hover:enabled:bg-accentHover transition-all active:enabled:bg-accent flex justify-center items-center  ",
        disabled && "opacity-10",
        isLoading && "bg-transparent opacity-50",
        variant === "danger" && "bg-error hover:enabled:bg-error/80",
        variant === "ghost" &&
          "bg-transparent  hover:enabled:bg-card text-secondary border border-secondary ",
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner classname="w-6 h-6 " />}
    </button>
  );
}