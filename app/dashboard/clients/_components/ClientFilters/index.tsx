'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectItemText } from '@radix-ui/react-select';
import { ClientFilter } from '../../useClientsPage';

interface IClientFilters {
  street: string;
  setStreet: (value: string) => void;
  filterValue: ClientFilter;
  setFilterValue: (value: ClientFilter) => void;
  onEnterPress: () => void;
}

export default function ClientFilters(props: IClientFilters) {
  const { filterValue, setFilterValue, setStreet, street, onEnterPress } = props;
  const onButtonPress = (key: string) => {
    if (key === 'Enter') {
      onEnterPress();
    }
  };
  return (
    <div className="flex flex-row gap-4 w-full">
      <Input
        placeholder="Buscar por endereço"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        onKeyDown={(e) => onButtonPress(e.key)}
      />

      <Select>
        <SelectTrigger className="w-[120px]" defaultValue={filterValue} value={filterValue}>
          {filterValue}
        </SelectTrigger>

        <SelectContent>
          <SelectItem onClick={() => setFilterValue('Ativos')} value="ativos">
            <SelectItemText>Serviços ativos</SelectItemText>
          </SelectItem>
          <SelectItem onClick={() => setFilterValue('Inativos')} value="inativos">
            <SelectItemText>Serviços inativos</SelectItemText>
          </SelectItem>
          <SelectItem onClick={() => setFilterValue('Todos')} value="todos">
            <SelectItemText>Todos</SelectItemText>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
