"use client";
import { CardVideo } from "./CardVideo";
import { OrderBy } from "./OrderBy";
import { Paginator } from "./Paginator";
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

const filters: any[] = [
  { id: 0, name: "Agência", selected: false },
  { id: 1, name: "Chatbot", selected: false },
  { id: 2, name: "Marketing Digital", selected: false },
  { id: 3, name: "Geração de Leads", selected: true },
  { id: 4, name: "Mídia paga", selected: false },
];

function onChangeFilter() {}
function onChangeOrder() {}
function onClickVideo() {}
function onChangePage(index: number) {}

export function List() {
  return (
    <div>
      <div className="flex mb-4 justify-between">
        <div className="flex justify-center">
          {filters.map(({ id, name, selected }) => (
            <Tooltip key={id} name={name} selected={selected}></Tooltip>
          ))}
        </div>
        <div className="flex justify-center">
          <OrderBy></OrderBy>
        </div>
      </div>
      <div className="flex justify-center py-8 border-y-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {videos.map(({ id, thumbnailImg, title }) => (
            <CardVideo
              key={id}
              thumbnailImg={thumbnailImg}
              altImg={`Thumbnail Video ${id}`}
              title={title}
            ></CardVideo>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Paginator
          total={30}
          size={9}
          index={0}
          onClick={(index: number) => onChangePage(index)}
        />
      </div>
    </div>
  );
}
