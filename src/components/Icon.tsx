import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
export function Icon({ svg, href }: { svg: IconDefinition; href: string }) {
  return (
    <Link href={href}>
      <FontAwesomeIcon className="inline" icon={svg} width={18} height={18} />
    </Link>
  );
}
