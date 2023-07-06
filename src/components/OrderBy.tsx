import { ComboBox, ComboOption } from "./ComboBox";

const options: ComboOption[] = [
  { value: "date", label: "Data de Publicação" },
  { value: "name", label: "Nome" },
];

export function OrderBy({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <ComboBox
      id="order"
      name="order"
      options={options}
      valeu={value}
      onChange={onChange}
      className="flex justify-end items-center gap-3"
    >
      <label className="text-sm font-bold">Ordenar por</label>
    </ComboBox>
  );
}
