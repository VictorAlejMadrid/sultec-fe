'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectItemText } from '@radix-ui/react-select';
import { ClientFilter } from '../../useClientsPage';
import AddClientForm from '../AddClientForm';

interface IClientConfigs {
  street: string;
  setStreet: (value: string) => void;
  filterValue: ClientFilter;
  setFilterValue: (value: ClientFilter) => void;
  onEnterPress: () => void;
}

export default function ClientConfigs(props: IClientConfigs) {
  const { filterValue, setFilterValue, setStreet, street, onEnterPress } = props;

  const onButtonPress = (key: string) => {
    if (key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full">
      <AddClientForm />

      <Input
        placeholder="Buscar por endereço"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        onKeyDown={(e) => onButtonPress(e.key)}
      />

      <Select value={filterValue} defaultValue="Ativos" onValueChange={setFilterValue}>
        <SelectTrigger className="w-[120px]" defaultValue={filterValue} value={filterValue}>
          {filterValue}
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Ativos">
            <SelectItemText>Com serviços ativos</SelectItemText>
          </SelectItem>
          <SelectItem value="Inativos">
            <SelectItemText>Com serviços inativos</SelectItemText>
          </SelectItem>
          <SelectItem value="Todos">
            <SelectItemText>Todos</SelectItemText>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
