import { z } from 'zod';

function getErrorMessage(field: string, maxLength: number) {
  return `${field} deve ter no máximo ${maxLength} caracteres.`;
}

function getEmptyFieldMessage() {
  return 'Campo não pode ser vazio.';
}

const addressSchema = z
  .object({
    street: z
      .string()
      .min(1, { message: getEmptyFieldMessage() })
      .max(100, { message: getErrorMessage('Rua', 100) }),
    number: z.number().min(1, { message: getEmptyFieldMessage() }),
    city: z
      .string()
      .min(1, { message: getEmptyFieldMessage() })
      .max(50, { message: getErrorMessage('Cidade', 50) }),
    district: z
      .string()
      .min(1, { message: getEmptyFieldMessage() })
      .max(50, { message: getErrorMessage('Bairro', 50) }),
    additionalInformation: z
      .string()
      .max(50, { message: getErrorMessage('Adicionais', 50) })
      .optional(),
  })
  .optional();

export const createClientSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: 'O nome deve possuir mais de 2 caracteres.',
      })
      .max(50, { message: getErrorMessage('Nome', 50) }),
    phoneNumber: z.string().min(14, { message: 'Telefone no formato errado' }).max(17),

    address: addressSchema,
  })
  .required();
