export interface ComboOption {
  value: string | number;
  label: string;
}

export function ComboBox({
  name,
  id,
  options,
  children,
  className,
}: {
  name: string;
  id: string;
  options: ComboOption[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
      <select className="combo-box px-2 py-1" name={name} id={id}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
