import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ClientDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <Link href="/dashboard/clients">
        <Button variant="sultec" className="w-full mt-4">
          Voltar à listagem de clientes
        </Button>
      </Link>
      {children}
    </div>
  );
}
