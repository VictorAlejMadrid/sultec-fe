'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      To be decided
      <Link href="dashboard/clients">
        <Button variant="sultec">Go to dashboards/clients</Button>
      </Link>
    </div>
  );
}
