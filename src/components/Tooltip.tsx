export function Tooltip({
  name,
  selected,
}: {
  name: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`tooltip px-4 py-2 cursor-pointer ml-4 first:mx-0 ${
        selected && "selected"
      }`}
    >
      <p>{name}</p>
    </div>
  );
}
