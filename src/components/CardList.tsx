import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function CardList({
  thumbnailImg,
  altImg,
  title,
}: {
  thumbnailImg: string;
  altImg: string;
  title: string;
}) {
  return (
    <div className="card-video m-4 cursor-pointer relative">
      <div className="">
        <Image
          src={thumbnailImg}
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
