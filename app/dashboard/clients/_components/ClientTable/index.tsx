'use client';

import ClientCard from '@/components/ClientCard';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { PaginatedResult, Pagination as PaginationType } from '@/interfaces/result';
import { UseMutateFunction } from '@tanstack/react-query';
import PaginationComponent from '@/components/Pagination';
import { ScrollArea } from '@/components/ui/scroll-area';

interface IClientTable {
  clients: PaginatedResult<ReadClientDto>;
  pagination: PaginationType;
  mutate: UseMutateFunction<PaginatedResult<any>, Error, number, unknown>;
}

export default function ClientTable(props: IClientTable) {
  const { clients, pagination, mutate } = props;

  return (
    <>
      <ScrollArea className="w-full flex flex-col flex-1 gap-2 overflow-y-auto scroll-smooth">
        <div className="flex flex-col gap-2">
          {clients.data.map((client) => {
            return <ClientCard key={client.id} client={client} />;
          })}
        </div>
      </ScrollArea>

      <PaginationComponent mutate={mutate} pagination={pagination} />
    </>
  );
}
