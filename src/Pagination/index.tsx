import { usePagination } from './usePagination';
import type { UsePaginationProps, PaginationResult } from './types';

interface PaginationProps extends UsePaginationProps {
  children: (pagination: PaginationResult) => JSX.Element;
}

export { usePagination };

export const Pagination = ({
  children,
  ...props
}: PaginationProps) => {
  const pagination = usePagination(props);

  return children(pagination);
};

