'use client';

import { Separator } from '@/components/ui/separator';
import ClientConfigs from './_components/ClientConfigs';
import useClientsPage from './useClientsPage';
import { Loader2Icon } from 'lucide-react';
import ClientTable from './_components/ClientTable';

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

      {isPending && <Loader2Icon className="animate-spin" />}

      {data && <ClientTable clients={data} pagination={data.pagination} mutate={mutate} />}

      {isError && <div>Ocorreu um erro ao carregar os dados. Verifique sua conexão.</div>}
    </div>
  );
}
