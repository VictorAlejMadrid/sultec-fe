'use client';

import { PaginatedResult, Pagination } from '@/interfaces/result';
import PaginationComponent from '../Pagination';
import { ScrollArea } from '../ui/scroll-area';
import { UseMutateFunction } from '@tanstack/react-query';
import { ReactNode } from 'react';

interface IListCards {
  pagination?: Pagination | undefined;
  mutate?: UseMutateFunction<PaginatedResult<any>, Error, number, unknown>;
  children: ReactNode;
}

export default function ListCards(props: IListCards) {
  const { pagination, mutate, children } = props;

  return (
    <>
      <ScrollArea className="w-full flex flex-col flex-1 gap-2 overflow-y-auto scroll-smooth">
        <div className="flex flex-col gap-2">{children}</div>
      </ScrollArea>

      {pagination && mutate && <PaginationComponent mutate={mutate} pagination={pagination} />}
    </>
  );
}
