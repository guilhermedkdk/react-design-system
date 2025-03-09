import { styled } from "../../styles";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  
  backgroundColor: '$gray900',
  
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',
  
  userSelect: 'none',
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
});