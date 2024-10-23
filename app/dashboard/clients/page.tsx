'use client';

import { Separator } from '@/components/ui/separator';
import { getPaginatedClients } from '@/resourses/api/clients';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ClientFilters from './_components/ClientFilters';
import ClientTable from './_components/ClientTable';

export type ClientFilter = 'Todos' | 'Ativos' | 'Inativos';

export default function Clients() {
  const [filterValue, setFilterValue] = useState<ClientFilter>('Todos');
  const [street, setStreet] = useState('');

  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getPaginatedClients(20, 1, street),
  });

  return (
    <div className="flex-col flex items-center justify-items-center w-full gap-3 mt-3">
      <h3>Encontrar clientes</h3>
      <ClientFilters
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setStreet={setStreet}
        street={street}
      />

      <Separator />

      <ClientTable clients={data} />
    </div>
  );
}
