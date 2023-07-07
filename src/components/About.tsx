import Link from "next/link";

export interface AboutList {
  name: string;
  itens: AboutItens[];
}

interface AboutItens {
  id: number;
  name: string;
  href: string;
}

export function About({
  list,
  translate,
}: {
  list: AboutList;
  translate: any;
}) {
  const { name, itens } = list;
  return (
    <div className="lg:flex-1 md:flex-6 px-3">
      <p className="text-lg font-semibold mb-5">{translate(name)}</p>
      <ul>
        {itens.map((item: AboutItens) => (
          <li key={item.id} className="mb-4">
            <Link href={item.href} style={{ color: "#677294" }}>
              {translate(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
