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
          "outline-none text-primary transition-all disabled:cursor-not-allowed disabled:opacity-30  ",
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
