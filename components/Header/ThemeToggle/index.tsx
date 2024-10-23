'use client';

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
import { cn } from '@/lib/utils';
import { Monitor, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-blue-500 focus:outline-none focus:border-white rounded-full text-white py-2 px-4 hover:bg-accent hover:text-accent-foreground">
        {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">Alterar tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup className="flex-row flex justify-center gap-3 py-1">
            <DropdownMenuRadioItem
              className={cn(`p-2 rounded-full `, theme === 'dark' && 'bg-blue-500')}
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
