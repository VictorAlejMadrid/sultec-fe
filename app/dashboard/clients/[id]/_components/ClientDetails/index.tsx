'use client';

import ListCards from '@/components/ListCards';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { ChevronsUpDownIcon, UserRound } from 'lucide-react';
import AddressCard from '../AddressCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

export interface IClientDetails {
  client: ReadClientDto;
}

export default function ClientDetails({ client }: IClientDetails) {
  const { id, name, phoneNumber, addresses } = client;

  return (
    <div className="w-full my-4">
      <section className="flex flex-row w-full p-5 border-2 border-input rounded-3xl">
        <UserRound size={100} />
        <div className="flex-1 flex justify-between relative">
          <p className="text-lg">{name}</p>
          <p className="text-lg">{phoneNumber}</p>
          <p className="text-lg absolute bottom-0 right-0 text-gray-400">#{id}</p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center mt-2">
        <Collapsible defaultOpen className="w-full my-4">
          <CollapsibleTrigger className="w-full ">
            <Button variant="sultec" className="w-full flex justify-start relative">
              Mostrar todos os serviços
              <ChevronsUpDownIcon size={16} className="absolute right-5" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <ListCards pagination={undefined}>
              <p>ainda nao tem</p>
            </ListCards>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="w-full">
          <CollapsibleTrigger className="w-full ">
            <Button variant="sultec" className="w-full flex justify-start relative">
              Mostrar endereços do cliente
              <ChevronsUpDownIcon size={16} className="absolute right-5" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <ListCards pagination={undefined}>
              {addresses.map((address) => (
                <AddressCard address={address} />
              ))}
            </ListCards>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
