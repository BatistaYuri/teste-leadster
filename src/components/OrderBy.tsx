import { ComboOption } from "@/models/types";
import { ComboBox } from "./ComboBox";

export function OrderBy({
  options,
  value,
  translate,
  onChange,
}: {
  options: ComboOption[];
  value: string;
  translate: any;
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
      translate={translate}
    >
      <label className="text-sm font-bold">
        {translate("common.home.list.order.order-by")}
      </label>
    </ComboBox>
  );
}
