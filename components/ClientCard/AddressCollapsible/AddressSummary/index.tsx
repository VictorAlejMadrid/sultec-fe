import { ReadClientAddressDto } from '@/interfaces/AddressDtos/ReadClientAddressDto';
import { MapPin } from 'lucide-react';

interface IAdressCard {
  address: ReadClientAddressDto;
}

export default function AddressSummary({ address }: IAdressCard) {
  const { city, street, number, district, additionalInformation } = address;

  return (
    <div className="flex items-center flex-row w-full py-1 px-4">
      <MapPin size={20} className="mr-3 text-blue-700" />
      <p className="text-sm">
        {street}, {number}
        {additionalInformation ? ` / ${additionalInformation}` : ''} - {district}
      </p>

      <p className="text-sm text-gray-400">&nbsp;/ {city}</p>
    </div>
  );
}
