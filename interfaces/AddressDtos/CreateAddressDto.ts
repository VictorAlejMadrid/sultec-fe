export type CreateAddressDto = {
  street: string;
  number: number;
  additionalInformation: string | null;
  district: string | null;
  city: string;
  clientId: number;
};
