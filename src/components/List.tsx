import { CardVideo } from "./CardVideo";
import { OrderBy } from "./OrderBy";
import { Tooltip } from "./Tooltip";

const videos: any[] = [
  {
    id: 0,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 1,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 2,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 3,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 4,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 5,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 6,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 7,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
  {
    id: 8,
    title: "Como aumentar sua geração de Leads feat. Traktor",
    thumbnailImg: "/images/thumbnail.png",
  },
];

export function List() {
  return (
    <div>
      <div className="flex mb-4 justify-between">
        <div className="flex justify-center">
          <Tooltip name="Agência" selected={false}></Tooltip>
          <Tooltip name="Chatbot" selected={false}></Tooltip>
          <Tooltip name="Marketing Digital" selected={false}></Tooltip>
          <Tooltip name="Geração de Leads" selected={true}></Tooltip>
          <Tooltip name="Mídia paga" selected={false}></Tooltip>
        </div>
        <div className="flex justify-center">
          <OrderBy></OrderBy>
        </div>
      </div>
      <div className="flex justify-center py-8 border-y-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {videos.map((video) => (
            <CardVideo
              key={video.id}
              thumbnailImg={video.thumbnailImg}
              altImg={`Thumbnail Video ${video.id}`}
              title={video.title}
            ></CardVideo>
          ))}
        </div>
      </div>
    </div>
  );
}
