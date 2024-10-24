import { ReadClientAddressDto } from '@/interfaces/AddressDtos/ReadClientAddressDto';

interface IAdressCard {
  address: ReadClientAddressDto;
}

export default function AdressCard({ address }: IAdressCard) {
  const { city, street, number, district, additionalInformation } = address;

  return (
    <div className="flex flex-row w-full py-2 px-4">
      <p className="text-sm">
        {street}, {number}
        {additionalInformation ? ` / ${additionalInformation}` : ''} - {district}
      </p>

      <p className="text-sm text-gray-400">&nbsp;/ {city}</p>
    </div>
  );
}
