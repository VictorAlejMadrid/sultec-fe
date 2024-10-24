'use client';

import { getClientByID } from '@/resourses/api/clients';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import ClientDetails from './_components/ClientDetails';

export default function SingleClient({ params }: { params: { id: number } }) {
  const {
    data: client,
    isPending,
    error,
  } = useQuery({
    queryKey: ['teste'],
    queryFn: () => getClientByID(params.id),
  });

  if (isPending) {
    return (
      <div className="w-full flex h-full justify-center items-center">
        <Loader2Icon className="w-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div>Ocorreu um erro ao recolher os dados do cliente.</div>;
  }

  return <ClientDetails client={client.data} />;
}
