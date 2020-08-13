export type Section = {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
};

export type DirectoryState = {
  sections: Section[];
};
