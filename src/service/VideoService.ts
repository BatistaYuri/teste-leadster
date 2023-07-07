import { Category, ComboOption, Video } from "@/models/types";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

export function getVideos(
  page: number,
  limit: number,
  filters: number[],
  order: string
): Promise<{ videos: Video[]; total: number }> {
  return api
    .get<{ videos: Video[] }>("/videos", {
      params: {
        _page: page,
        _limit: limit,
        _order: "asc",
        _sort: order,
        categoryId: filters,
      },
    })
    .then((response) => {
      return {
        videos: response.data,
        total: +response.headers["x-total-count"],
      };
    })
    .catch((e) => {
      return e;
    });
}

export function getVideo(id: number): Promise<Video> {
  return api
    .get<{ video: Video }>(`/videos/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
}

export function getAllCategories(): Promise<Category[]> {
  return api
    .get<{ categories: Category[] }>("/categories")
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
}

export function getOrderOptions(): Promise<ComboOption[]> {
  return api
    .get<{ options: ComboOption[] }>("/orderOptions")
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
}
