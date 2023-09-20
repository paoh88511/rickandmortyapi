export const BASE_URL = "https://rickandmortyapi.com/api/character";
export interface Character {
  name: string;
  image: string;
}
export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface PaginProp {
  pageInfo: PageInfo | null;
  currentPage: number;
  handlePrev: () => void;
  handleNext: () => void;
  handleClick: (page: number) => void;
}
