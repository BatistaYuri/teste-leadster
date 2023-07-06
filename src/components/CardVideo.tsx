"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function CardVideo({
  thumbnailImg,
  altImg,
  title,
  onClick,
}: {
  thumbnailImg?: string;
  altImg: string;
  title: string;
  onClick: () => void;
}) {
  const thumbnail = thumbnailImg ? thumbnailImg : "/images/thumbnail.png";
  return (
    <div className="card-video cursor-pointer relative" onClick={onClick}>
      <div className="">
        <Image
          src={thumbnail}
          width={300}
          height={250}
          alt={altImg}
          loading="lazy"
        />
      </div>
      <div className="card-video-player absolute top-0 justify-center items-center">
        <FontAwesomeIcon
          icon={faPlay}
          width={56}
          height={56}
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
