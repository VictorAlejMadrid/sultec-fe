import { CreateAddressDto } from '../AddressDtos/CreateAddressDto';

export type CreateClientDto = {
  name: string;
  phoneNumber: string;
  address: CreateAddressDto;
};
