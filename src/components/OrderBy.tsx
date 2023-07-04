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
    >
      <label className="font-semibold mr-2">Ordenar por</label>
    </ComboBox>
  );
}
