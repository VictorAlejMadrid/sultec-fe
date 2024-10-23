import { ReadClientAddressDto } from '@/interfaces/AddressDtos/ReadClientAddressDto';

interface IAdressCard {
  address: ReadClientAddressDto;
}

export default function AdressCard({ address }: IAdressCard) {
  const { city, street, number, district, additionalInformation } = address;
  return (
    <div className="flex flex-row w-full py-2 px-4">
      <p className="text-sm">{street},&nbsp;</p>
      <p className="text-sm">{number} -&nbsp;</p>
      {additionalInformation && <p className="text-sm">{additionalInformation}</p>}

      <p className="text-sm">{district}, &nbsp;</p>
      <p className="text-sm text-gray-400">{city}</p>
    </div>
  );
}
