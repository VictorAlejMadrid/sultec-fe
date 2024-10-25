import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface ISimpleTooltip {
  children: ReactNode;
  text: string;
  className?: string;
}

export default function SimpleTooltip({ children, text, className }: ISimpleTooltip) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className={className}>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
