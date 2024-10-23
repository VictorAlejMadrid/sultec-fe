import usePagination from '@/components/Pagination/usePagination';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginatedResult, Pagination as PaginationType } from '@/interfaces/result';
import { cn } from '@/lib/utils';
import { UseMutateFunction } from '@tanstack/react-query';

interface IPaginationComponent {
  pagination: PaginationType;
  mutate: UseMutateFunction<PaginatedResult<any>, Error, number, unknown>;
  className?: string;
}

export default function PaginationComponent({
  pagination,
  mutate,
  className,
}: IPaginationComponent) {
  const { getFirstPage, getPreviousPage, getNextPage, getLastPage } = usePagination(
    pagination,
    mutate
  );
  const previousPage = pagination.pageNumber - 1;
  const nextPage = pagination.pageNumber + 1;

  const stylePageLink = cn('hover:cursor-pointer hover:bg-gray-200 rounded-md hover:text-black');

  return (
    <Pagination className={cn('w-full', className)}>
      <PaginationContent className="flex w-full justify-between">
        <PaginationItem>
          <PaginationPrevious onClick={() => getPreviousPage()} className={stylePageLink} />
        </PaginationItem>

        <div className="flex flex-row gap-1">
          {previousPage > 0 && (
            <>
              <PaginationItem>
                <PaginationEllipsis onClick={() => getFirstPage()} className={stylePageLink} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => getPreviousPage()} className={stylePageLink}>
                  {previousPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem className="hover:bg-transparent">
            <PaginationLink className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
              {pagination.pageNumber}
            </PaginationLink>
          </PaginationItem>

          {nextPage <= pagination.totalPages && (
            <>
              <PaginationItem>
                <PaginationLink onClick={() => getNextPage()} className={stylePageLink}>
                  {nextPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis onClick={() => getLastPage()} className={stylePageLink} />
              </PaginationItem>
            </>
          )}
        </div>

        <PaginationItem>
          <PaginationNext onClick={() => getNextPage()} className={stylePageLink} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
