import { Check } from "lucide-react";

interface CheckBoxProps {
  checked: boolean;
}

export function CheckBox({ checked }: CheckBoxProps) {
  return (
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="peer h-5 w-5  transition-all appearance-none rounded shadow hover:shadow-md border border-border checked:bg-card checked:border-card"
        id="check"
        checked={checked}
        readOnly
      />
      <span className="absolute text-primary opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
      </span>
    </label>
  );
}