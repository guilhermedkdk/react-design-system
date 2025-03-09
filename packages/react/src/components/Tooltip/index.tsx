import { ComponentProps, ReactNode  } from 'react'
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipArrow } from './styles';

export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children, ...props }: TooltipProps) {  
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

Tooltip.displayName = "Tooltip";

