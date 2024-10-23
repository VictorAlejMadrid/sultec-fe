'use client';

import ClientCard from '@/components/ClientCard';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { PaginatedResult, Pagination as PaginationType } from '@/interfaces/result';
import { UseMutateFunction } from '@tanstack/react-query';
import PaginationComponent from '@/components/Pagination';

interface IClientTable {
  clients: PaginatedResult<ReadClientDto>;
  pagination: PaginationType;
  mutate: UseMutateFunction<PaginatedResult<any>, Error, number, unknown>;
}

export default function ClientTable(props: IClientTable) {
  const { clients, pagination, mutate } = props;

  return (
    <>
      <div className={'w-full flex flex-col flex-1 gap-2 overflow-y-auto scroll-smooth'}>
        {clients.data.map((client) => {
          return <ClientCard key={client.id} client={client} />;
        })}
      </div>

      <PaginationComponent mutate={mutate} pagination={pagination} />
    </>
  );
}
