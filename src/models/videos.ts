export interface Video {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  url: string;
  date: number;
}

export interface Category {
  id: number;
  name: string;
}
