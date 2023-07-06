"use client";
import { getVideos, getAllCategories, getVideo } from "@/service/VideoService";
import { CardVideo } from "./CardVideo";
import { OrderBy } from "./OrderBy";
import { Paginator } from "./Paginator";
import { Tooltip } from "./Tooltip";
import { useCallback, useEffect, useState } from "react";
import { Category, Video } from "@/models/videos";

export function List({
  onClickVideo,
}: {
  onClickVideo: (video: Video) => void;
}) {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [order, setOrder] = useState<string>("name");
  const [videos, setVideos] = useState<Video[]>([]);
  const [totalVideos, setTotalVideos] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState<number[]>([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos, page, order, filters]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row mb-4 justify-between flex-wrap gap-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center gap-2">
          {categories.map(({ id, name }) => (
            <Tooltip
              key={id}
              name={name}
              selected={filters.includes(id)}
              onClick={() => onChangeFilter(id)}
            ></Tooltip>
          ))}
        </div>
        <div>
          <OrderBy
            value={order}
            onChange={(value) => {
              setOrder(value);
              setPage(1);
            }}
          ></OrderBy>
        </div>
      </div>
      <div className="flex justify-center py-8 border-y-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {videos.map(({ id, title }) => (
            <CardVideo
              key={id}
              altImg={`Thumbnail Video ${id}`}
              title={title}
              onClick={() => handleVideo(id)}
            ></CardVideo>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Paginator
          total={totalVideos}
          size={limit}
          index={page}
          onClick={(index: number) => setPage(index)}
        />
      </div>
    </div>
  );
}
