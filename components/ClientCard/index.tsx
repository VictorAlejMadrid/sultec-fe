import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { UserRound } from 'lucide-react';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import AddressCollapsible from './AddressCollapsible';

interface IClientCard {
  client: ReadClientDto;
}

export default function ClientCard({ client }: IClientCard) {
  const { name, phoneNumber, id, addresses } = client;

  return (
    <div className="w-full border-2 rounded-xl border-input">
      <Link href={`/dashboard/clients/${id}`}>
        <div className="flex py-2 px-4 gap-3 hover:cursor-pointer">
          <UserRound size={40} />
          <p>{name}</p>

          <div className="flex-1 flex flex-col justify-end items-end">
            <p>{phoneNumber}</p>
            <p title="Id do usuário no banco de dados" className="text-gray-400 self-end">
              #{id}
            </p>
          </div>
        </div>
      </Link>
      {addresses.length > 0 && (
        <>
          <Separator />
          <AddressCollapsible addresses={addresses} />
        </>
      )}
    </div>
  );
}
