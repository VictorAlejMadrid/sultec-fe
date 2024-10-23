'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Monitor, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="text-white">
        <Button
          variant="outline"
          className="bg-blue-500 border-0 rounded-full"
          title="Alterar tema"
        >
          {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">Alterar tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup className="flex-row flex justify-center gap-3 py-1">
            <DropdownMenuRadioItem
              className={`p-2 rounded-full ${theme === 'dark' && 'bg-blue-500'}`}
              value="dark"
              onClick={() => setTheme('dark')}
              title="Mudar para tema escuro"
            >
              <MoonIcon />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className={`p-2 rounded-full ${theme === 'light' && 'bg-blue-500 text-white'}`}
              value="light"
              onClick={() => setTheme('light')}
              title="Mudar para tema claro"
            >
              <SunIcon />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className={`p-2 rounded-full ${theme === 'system' && 'bg-blue-500 text-white'}`}
              value="light"
              onClick={() => setTheme('system')}
              title="Usar tema do sistema"
            >
              <Monitor />
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
