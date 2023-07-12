"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function Card({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`card ${className} ${onClick && "cursor-pointer"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
