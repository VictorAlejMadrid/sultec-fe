'use client';

import ListCards from '@/components/ListCards';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { UserRound } from 'lucide-react';

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
      <section className="w-full flex justify-center mt-2">
        <p>Serviços:</p>
      </section>
      <section className="w-full flex justify-center mt-2">
        <p>Endereços:</p>
        <ListCards pagination={undefined}>
          {addresses.map((address) => (
            <p>{address.clientId}</p>
          ))}
        </ListCards>
      </section>
    </div>
  );
}
