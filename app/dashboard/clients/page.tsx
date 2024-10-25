'use client';

import { Separator } from '@/components/ui/separator';
import ClientConfigs from './_components/ClientConfigs';
import useClientsPage from './useClientsPage';
import ListCards from '@/components/ListCards';
import { Pagination } from '@/interfaces/result';
import { Skeleton } from '@/components/ui/skeleton';
import ClientCard from '@/components/ClientCard';
import { getArrayWithKeys } from '@/lib/utils';

export default function Clients() {
  const {
    filterValue,
    setFilterValue,
    street,
    setStreet,
    data,
    mutate,
    onEnterPress,
    isPending,
    isError,
  } = useClientsPage();

  return (
    <div className="flex-col flex items-center w-full h-[100%-90px] gap-3 mt-2 mb-8">
      <h3>Encontrar clientes</h3>
      <ClientConfigs
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setStreet={setStreet}
        street={street}
        onEnterPress={onEnterPress}
      />

      <Separator />

      <ListCards
        mutate={mutate}
        pagination={data?.pagination ? data.pagination : ({} as Pagination)}
      >
        {isPending &&
          getArrayWithKeys(10).map((key) => <Skeleton key={key} className="w-full h-20" />)}

        {data && data.data.map((client) => <ClientCard key={client.id} client={client} />)}

        {isError && (
          <p className="flex justify-center text-center">
            Ocorreu um erro ao carregar os dados.
            <br />
            Verifique sua conexão.
          </p>
        )}
      </ListCards>
    </div>
  );
}
