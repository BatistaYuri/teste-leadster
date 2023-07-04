export function Tooltip({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`tooltip px-4 py-2 cursor-pointer ml-4 first:mx-0 ${
        selected && "selected"
      }`}
      onClick={onClick}
    >
      <p>{name}</p>
    </div>
  );
}
