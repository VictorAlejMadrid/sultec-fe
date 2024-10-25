'use client';

import Image from 'next/image';
import LogoSultecWhite from '@/assets/images/LogoSultecWhite.svg';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';
import { HouseIcon, MapPin, UsersIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import SimpleTooltip from '../SimpleTooltip';
import Link from 'next/link';

export default function Header() {
  const IconStyle = cn('hover:scale-125 transition-all hover:cursor-pointer');

  return (
    <header className="z-40 w-full h-[80px] bg-blue-700 flex items-center justify-between px-5 py-2">
      <Image
        priority={true}
        alt="Logo da Sultec"
        draggable={false}
        src={LogoSultecWhite}
        width={200}
      />

      <nav className="flex items-center text-white gap-4">
        <SimpleTooltip text="Serviços">
          <Link href="/">
            <HouseIcon size={30} className={IconStyle} />
          </Link>
        </SimpleTooltip>
        <SimpleTooltip text="Clientes">
          <Link href="/dashboard/clients">
            <UsersIcon size={30} className={IconStyle} />
          </Link>
        </SimpleTooltip>
        <SimpleTooltip text="Endereços">
          <Link href="dashboard/addresses">
            <MapPin size={30} className={IconStyle} />
          </Link>
        </SimpleTooltip>
      </nav>

      <div className="flex flex-row gap-3 items-center">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
