import { ComboBox, ComboOption } from "./ComboBox";

const options: ComboOption[] = [
  { value: 0, label: "Data de Publicação" },
  { value: 1, label: "Nome" },
];

export function OrderBy() {
  return (
    <ComboBox id="order" name="order" options={options}>
      <label className="font-semibold mr-2">Ordenar por</label>
    </ComboBox>
  );
}
