'use client';

import Image from 'next/image';
import LogoSultecWhite from '@/assets/images/LogoSultecWhite.svg';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="z-40 w-full h-[80px] bg-blue-700 flex items-center justify-between px-5">
      <Image alt="Logo da Sultec" draggable={false} src={LogoSultecWhite} width={200} />
      <div className="flex flex-row gap-3 items-center">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
