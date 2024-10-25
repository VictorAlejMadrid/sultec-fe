import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import RequiredAsterisk from '@/components/UtilComponents/RequiredAsterisk';
import useClientForm from './useClientForm';
import { capitalize } from '@/lib/Utils/formatters';

export default function AddClientForm() {
  const { phoneNumber, handlePhoneNumberChange, onSubmit, form } = useClientForm();

  return (
    <Dialog>
      <DialogTrigger suppressHydrationWarning>
        <Button variant="sultec" suppressHydrationWarning>
          Adicionar cliente
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar cliente</DialogTitle>
          <DialogDescription>
            Adicione um cliente com ou sem endereço. <br />
            Campos marcados com <RequiredAsterisk /> são obrigatórios.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <section className="w-full flex gap-2 flex-wrap">
              <p className="w-full">
                Dados do cliente: <RequiredAsterisk />
              </p>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Nome"
                        {...field}
                        onChange={(e) => {
                          field.onChange(capitalize(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Telefone"
                        {...field}
                        value={phoneNumber}
                        onChange={(e) => {
                          handlePhoneNumberChange(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex gap-2 flex-wrap">
                <p className="w-full">Endereço do cliente:</p>
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Rua"
                          {...field}
                          onChange={(e) => {
                            field.onChange(capitalize(e.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.number"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Número"
                          {...field}
                          onChange={(e) => {
                            const num = e.target.value;
                            if (isNaN(parseInt(num))) {
                              field.onChange(0);
                              return;
                            }
                            field.onChange(parseInt(num));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Cidade"
                          {...field}
                          onChange={(e) => {
                            field.onChange(capitalize(e.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.district"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Bairro"
                          {...field}
                          onChange={(e) => {
                            field.onChange(capitalize(e.target.value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address.additionalInformation"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Informações adicionais"
                        {...field}
                        onChange={(e) => {
                          field.onChange(capitalize(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <DialogFooter>
              <Button type="submit" variant="sultec">
                Adicionar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
