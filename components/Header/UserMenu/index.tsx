'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserMenu() {
  return (
    <div className="flex-row flex items-center gap-2 hover:bg-accent hover:text-accent-foreground text-white rounded-full border-black p-[6px] bg-blue-500 ">
      <Avatar>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
          alt="Imagem genérica de perfil"
          draggable={false}
        />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <p>Sultec Admin</p>
    </div>
  );
}
