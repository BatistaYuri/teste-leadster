"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function VideoCard({
  thumbnail,
  altImg,
  title,
  className,
  onClick,
}: {
  thumbnail: string;
  altImg: string;
  title: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`card-video cursor-pointer relative animation from-left ${className}`}
      onClick={onClick}
    >
      <div className="">
        <Image
          src={thumbnail}
          width={350}
          height={300}
          alt={altImg}
          loading="lazy"
          className="rounded-t-[15px]"
        />
      </div>
      <div className="card-video-player absolute top-0 justify-center items-center">
        <FontAwesomeIcon
          icon={faPlay}
          width={60}
          height={60}
          color="white"
          opacity={200}
        />
      </div>
      <div className="px-6 py-4">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
}
