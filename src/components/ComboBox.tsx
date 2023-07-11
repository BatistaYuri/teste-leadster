import { ComboOption } from "@/models/types";

export function ComboBox({
  name,
  id,
  options,
  valeu,
  children,
  className,
  translate,
  onChange,
}: {
  name: string;
  id: string;
  valeu: string | number;
  options: ComboOption[];
  children?: React.ReactNode;
  className?: string;
  translate?: any;
  onChange: (value: string) => void;
}) {
  return (
    <div className={className}>
      {children}
      <select
        className="combo-box px-2 py-1"
        name={name}
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={valeu}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {translate ? translate(option.name) : option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
