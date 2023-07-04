export interface ComboOption {
  value: string | number;
  label: string;
}

export function ComboBox({
  name,
  id,
  options,
  valeu,
  children,
  className,
  onChange,
}: {
  name: string;
  id: string;
  valeu: string | number;
  options: ComboOption[];
  children: React.ReactNode;
  className?: string;
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
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
