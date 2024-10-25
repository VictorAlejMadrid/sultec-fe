import { cn } from '@/lib/utils';

export default function RequiredAsterisk({ className }: { className?: string }) {
  return <strong className={cn('text-red-600', className)}>*</strong>;
}
