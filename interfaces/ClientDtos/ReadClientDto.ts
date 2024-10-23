import { ReadClientAddressDto } from '../AddressDtos/ReadClientAddressDto';

export type ReadClientDto = {
  id: number;
  name: string;
  phoneNumber: string;
  addresses: ReadClientAddressDto[];
};
