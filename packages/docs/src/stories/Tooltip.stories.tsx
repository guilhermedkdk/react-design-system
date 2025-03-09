import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps, Button } from "@gdk-ignite-ui/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: "This is a tooltip",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
