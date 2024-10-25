import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ReadClientAddressDto } from '@/interfaces/AddressDtos/ReadClientAddressDto';
import { Separator } from '@/components/ui/separator';
import { CaretSortIcon } from '@radix-ui/react-icons';
import AddressSummary from './AddressSummary';

interface IAddressCollapsible {
  addresses: ReadClientAddressDto[];
}

export default function AddressCollapsible({ addresses }: IAddressCollapsible) {
  const firstAddress = addresses[0];

  return (
    <Collapsible>
      <CollapsibleTrigger className="relative w-full">
        <AddressSummary address={firstAddress} />
        {addresses.length > 1 && <CaretSortIcon className="absolute right-2 top-2" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {addresses.slice(1, addresses.length).map((address) => (
          <div key={address.id} className="w-full">
            <Separator />
            <AddressSummary address={address} />
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
