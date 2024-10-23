'use client';

import { Separator } from '@/components/ui/separator';
import ClientFilters from './_components/ClientFilters';
import ClientTable from './_components/ClientTable';
import useClientsPage from './useClientsPage';

export default function Clients() {
  const { filterValue, setFilterValue, street, setStreet, data, mutate, onEnterPress } =
    useClientsPage();

  return (
    <div className="flex-col flex items-center w-full h-[100%-90px] gap-3 mt-2 mb-8">
      <h3>Encontrar clientes</h3>
      <ClientFilters
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setStreet={setStreet}
        street={street}
        onEnterPress={onEnterPress}
      />

      <Separator />

      {data && <ClientTable clients={data} pagination={data.pagination} mutate={mutate} />}
    </div>
  );
}
