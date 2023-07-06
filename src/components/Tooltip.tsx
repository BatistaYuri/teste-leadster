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
      className={`tooltip px-4 py-2 cursor-pointer text-center ${
        selected && "selected"
      }`}
      onClick={onClick}
    >
      <p>{name}</p>
    </div>
  );
}
