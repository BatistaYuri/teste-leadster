export type Video = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  url: string;
  date: number;
};

export type Category = {
  id: number;
  name: string;
};

export type ComboOption = {
  id: string | number;
  name: string;
};
