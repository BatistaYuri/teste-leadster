"use client";
export function Paginator({
  total,
  size,
  index,
  onClick,
}: {
  total: number;
  size: number;
  index: number;
  onClick: (index: number) => void;
}) {
  if (total == 0 || size == 0) {
    return <></>;
  }
  const pages: number = Math.ceil(total / size);
  return (
    <div className="flex items-center">
      <p className="font-semibold mr-2">Página</p>
      <div className="flex">
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <div
            key={page}
            className={`paginator-number-page cursor-pointer px-2 py-1 ${
              page == index && "selected"
            }`}
            onClick={() => onClick(page)}
          >
            <p className="font-semibold">{page}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
