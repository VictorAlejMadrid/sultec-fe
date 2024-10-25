import SimpleTooltip from '@/components/SimpleTooltip';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReadClientAddressDto } from '@/interfaces/AddressDtos/ReadClientAddressDto';
import { CircleXIcon, MapPin, Pencil } from 'lucide-react';

interface IAddressCard {
  address: ReadClientAddressDto;
}

export default function AddressCard({ address }: IAddressCard) {
  const { street, number, additionalInformation, district, city } = address;

  return (
    <div className="w-full flex flex-row p-3 border-input border-2 rounded-2xl">
      <div className="flex-1 flex items-center max-h-[80%]">
        <MapPin className="mr-2 text-blue-700" />
        <p>
          {street}, {number}
          {additionalInformation ? '/' + additionalInformation : ''} - {district}
        </p>
        <p className="text-gray-400">&nbsp;/ {city}</p>
      </div>
      <div className="self-end flex gap-2">
        <Dialog>
          <DialogTrigger className="flex items-center">
            <SimpleTooltip className="bg-blue-700 text-white" text="Editar endereço">
              <Pencil className="text-blue-700" />
            </SimpleTooltip>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar endereço</DialogTitle>
              <DialogDescription>Edite o endereço preenchendo os campos abaixo</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button variant="sultec">Salvar</Button>
              </DialogClose>
              <DialogPortal>a</DialogPortal>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger className="flex items-center">
            <SimpleTooltip className="bg-red-700 text-white" text="Deletar endereço">
              <CircleXIcon className="text-red-700" />
            </SimpleTooltip>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação não pode ser revertida. Ela vai remover o endereço permanentemente do
                usuário junto com os serviços associados a este endereço.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-700 hover:bg-red-800 text-white">
                Deletar endereço
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
