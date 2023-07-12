"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}
