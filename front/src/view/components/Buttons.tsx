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
        "p-2 cursor-pointer disabled:cursor-not-allowed bg-[#34D399] rounded-4xl hover:enabled:bg-[#2cac7d] transition-all active:enabled:bg-[#34dfa0] flex justify-center  ",
        disabled && "opacity-10",
        isLoading && "bg-transparent opacity-50",
        variant === "danger" && "bg-red-900 hover:enabled:bg-red-800",
        variant === "ghost" &&
          "bg-transparent  hover:enabled:bg-gray-800/70 text-gray-400 border border-gray-400 ",

        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner classname="w-6 h-6 " />}
    </button>
  );
}