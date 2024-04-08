export interface UsePaginationProps {
  totalPage: number;
  currentPage: number;
  middlePagesSiblingCount?: number;
  edgePageCount?: number;
}

export interface PaginationResult {
  getMiddlePages: () => number[];
  hasPreviousPage: () => boolean;
  hasNextPage: () => boolean;
  getPreviousPages: () => number[];
  getNextPages: () => number[];
  isPreviousTruncable: () => boolean;
  isNextTruncable: () => boolean;
  totalPage: number;
  currentPage: number;
}

