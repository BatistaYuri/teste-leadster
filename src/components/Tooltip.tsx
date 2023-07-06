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
      className={`tooltip px-4 py-2 text-sm cursor-pointer self-center ${
        selected && "selected"
      }`}
      onClick={onClick}
    >
      <p className="font-medium">{name}</p>
    </div>
  );
}
