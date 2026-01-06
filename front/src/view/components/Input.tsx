import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';
import { CrossCircledIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, value, onChange, disabled, className, error, ...props }, ref) => {
  return (
    <>
      <input
        disabled={disabled}
        type="text"
        name={name}
        className={cn(
          "w-full bg-background/50 border border-border/30 rounded-xl px-4 py-3 text-primary placeholder:text-secondary/50 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error",
          className
        )}
        placeholder={placeholder}
        value={value}
        ref={ref}
        onChange={onChange}
        {...props}
      />
      {error && (
        <div className="flex gap-2 items-center ml-2 text-error">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </>
  );
})
