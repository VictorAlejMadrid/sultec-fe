import { formatPhoneNumber } from '@/lib/Utils/formatters';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createClientSchema } from './schemas';

export default function useClientForm() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formSchema = createClientSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: { street: '', number: 0, city: '', district: '', additionalInformation: '' },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function handlePhoneNumberChange(value: string) {
    const formatted = formatPhoneNumber(value);
    setPhoneNumber(formatted);
    form.setValue('phoneNumber', formatted);
  }

  return { phoneNumber, handlePhoneNumberChange, onSubmit, form };
}
