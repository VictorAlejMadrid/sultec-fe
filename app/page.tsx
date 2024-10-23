'use client';

import ClientCard from '@/components/ClientCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { getPaginatedClients } from '@/resourses/api/clients';
import { SelectItemText } from '@radix-ui/react-select';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Home() {
  const [filterValue, setFilterValue] = useState<'Todos' | 'Ativos' | 'Inativos'>('Todos');
  const [street, setStreet] = useState('');

  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getPaginatedClients(20, 1, street),
  });

  const onButtonPress = (key: string) => {
    if (key === 'Enter') {
      console.log('aaa');
    }
  };

  return (
    <div className="flex-col flex items-center justify-items-center w-full gap-3 mt-3">
      <h3>Encontrar clientes</h3>
      <div className="flex flex-row gap-4 w-full">
        <Input
          placeholder="Buscar por endereço"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          onKeyDown={(e) => onButtonPress(e.key)}
        />

        <Select>
          <SelectTrigger className="w-[120px]" defaultValue={filterValue} value={filterValue}>
            {filterValue}
          </SelectTrigger>

          <SelectContent>
            <SelectItem onClick={() => setFilterValue('Ativos')} value="ativos">
              <SelectItemText>Serviços ativos</SelectItemText>
            </SelectItem>
            <SelectItem onClick={() => setFilterValue('Inativos')} value="inativos">
              <SelectItemText>Serviços inativos</SelectItemText>
            </SelectItem>
            <SelectItem onClick={() => setFilterValue('Todos')} value="todos">
              <SelectItemText>Todos</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className={'w-full flex flex-col h-[70%] gap-2 overflow-y-scroll'}>
        {data?.data.map((client) => {
          return <ClientCard client={client} />;
        })}
      </div>
    </div>
  );
}
