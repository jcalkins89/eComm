export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
};
