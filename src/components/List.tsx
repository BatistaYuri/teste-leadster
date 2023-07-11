"use client";
import {
  getVideos,
  getAllCategories,
  getVideo,
  getOrderOptions,
} from "@/service/VideoService";
import { CardVideo } from "./CardVideo";
import { OrderBy } from "./OrderBy";
import { Paginator } from "./Paginator";
import { Tooltip } from "./Tooltip";
import { useCallback, useEffect, useState } from "react";
import { Category, ComboOption, Video } from "@/models/types";
import { Spinner } from "./Spinner";
import { useTranslations } from "next-intl";
import { startAnimation } from "@/utils/animation";

export function List({
  onClickVideo,
}: {
  onClickVideo: (video: Video) => void;
}) {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [order, setOrder] = useState<string>("date");
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [totalVideos, setTotalVideos] = useState<number>(0);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [filters, setFilters] = useState<number[]>([]);
  const [orderByOptions, setOrderByOptions] = useState<ComboOption[]>([]);
  const [disableAnimation, setDisableAnimation] = useState<boolean>(false);
  const translate = useTranslations();

  const loadVideos = useCallback(() => {
    getVideos(page, limit, filters, order).then((response) => {
      setVideos(response.videos);
      setTotalVideos(response.total);
    });
  }, [page, limit, filters, order]);

  const onChangeFilter = (categoryId: number) => {
    let newFilters = [...filters];
    if (filters.includes(categoryId)) {
      newFilters = filters.filter((filter) => filter != categoryId);
    } else {
      newFilters.push(categoryId);
    }
    setFilters(newFilters);
    setPage(1);
  };

  const handleVideo = (id: number) => {
    getVideo(id).then((video) => {
      onClickVideo(video);
    });
  };

  useEffect(() => {
    loadVideos();
    getAllCategories().then((response) => {
      setCategories(response);
    });
    getOrderOptions().then((response) => {
      setOrderByOptions(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos, page, order, filters]);

  if (!videos && !categories) {
    return (
      <div className="flex items-center w-full max-w-[1100px] min-h-[450px]">
        <Spinner />
      </div>
    );
  }

  startAnimation(document);

  document.onscroll = () => {
    setTimeout(() => {
      startAnimation(document);
    }, 150);
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row mb-4 justify-between flex-wrap gap-3 w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:flex justify-center gap-3">
          {categories?.map(({ id, name }) => (
            <Tooltip
              key={id}
              name={translate(name)}
              selected={filters.includes(id)}
              onClick={() => {
                onChangeFilter(id);
                setDisableAnimation(true);
              }}
            ></Tooltip>
          ))}
        </div>
        <div>
          <OrderBy
            options={orderByOptions}
            value={order}
            onChange={(value) => {
              setOrder(value);
              setPage(1);
              setDisableAnimation(true);
            }}
            translate={translate}
          ></OrderBy>
        </div>
      </div>
      <div className="flex justify-center py-8 border-y-2">
        <div
          data-cy="card-video-list"
          className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6"
        >
          {videos?.map(({ id, title }) => (
            <CardVideo
              key={id}
              thumbnail={`/images/thumbnail-${id}.png`}
              altImg={`Thumbnail Video ${id}`}
              title={title}
              onClick={() => handleVideo(id)}
              className={disableAnimation ? "animation-init" : ""}
            ></CardVideo>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Paginator
          total={totalVideos}
          size={limit}
          index={page}
          onClick={(index: number) => {
            setPage(index);
            setDisableAnimation(true);
            window.scrollTo(0, 500);
          }}
        />
      </div>
    </div>
  );
}
