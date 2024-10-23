import { ReadClientDto } from '../ClientDtos/ReadClientDto';

export type ReadAddressDto = {
  id: number;
  street: string;
  number: number;
  additionalInformation: string | null;
  district: string | null;
  city: string;
  clientId: number;
  client: ReadClientDto;
};
