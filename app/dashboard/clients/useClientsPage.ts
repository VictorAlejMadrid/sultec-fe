import { getPaginatedClients } from '@/resourses/api/clients';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type ClientFilter = 'Todos' | 'Ativos' | 'Inativos';

export default function useClientsPage() {
  const [filterValue, setFilterValue] = useState<ClientFilter>('Todos');
  const [street, setStreet] = useState('');

  const { data, mutate } = useMutation({
    mutationKey: ['clients'],
    mutationFn: async (page: number) => getPaginatedClients(10, page, street),
  });

  function onEnterPress() {
    if (data) {
      mutate(data.pagination.pageNumber);
    }
  }

  useEffect(() => {
    mutate(1);
  }, []);

  return {
    filterValue,
    setFilterValue,
    street,
    setStreet,
    data,
    mutate,
    onEnterPress,
  };
}
