import Image from "next/image";

export function Header() {
  return (
    <div className="container flex flex-col items-center py-8">
      <Image
        src="/images/logo.png"
        width={170}
        height={36}
        alt="Logo Leadster"
      />
    </div>
  );
}
