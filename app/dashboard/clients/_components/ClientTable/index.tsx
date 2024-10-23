import ClientCard from '@/components/ClientCard';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';
import { PaginatedResult } from '@/interfaces/result';

interface IClientTable {
  clients: PaginatedResult<ReadClientDto> | undefined;
}

export default function ClientTable(props: IClientTable) {
  const { clients } = props;
  return (
    <div className={'w-full flex flex-col flex-1 gap-2 overflow-y-scroll'}>
      {clients?.data.map((client) => {
        return <ClientCard client={client} />;
      })}
    </div>
  );
}
