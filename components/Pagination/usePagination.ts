import { Pagination } from '@/interfaces/result';
import { UseMutateFunction } from '@tanstack/react-query';

export default function usePagination(
  pagination: Pagination,
  mutate: UseMutateFunction<unknown, Error, number, unknown>
) {
  function getFirstPage() {
    if (pagination.pageNumber > 1) {
      mutate(1);
    }
  }

  function getPreviousPage() {
    if (pagination.pageNumber > 1) {
      mutate(pagination.pageNumber - 1);
    }
  }

  function getNextPage() {
    if (pagination.pageNumber < pagination.totalPages) {
      mutate(pagination.pageNumber + 1);
    }
  }

  function getLastPage() {
    if (pagination.pageNumber !== pagination.totalPages) {
      mutate(pagination.totalPages);
    }
  }

  return { getFirstPage, getPreviousPage, getNextPage, getLastPage };
}
