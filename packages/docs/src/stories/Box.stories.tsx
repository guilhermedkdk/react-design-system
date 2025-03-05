import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@gdk-ignite-ui/react'

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elementro Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {}