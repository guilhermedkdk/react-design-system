import { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from "@gdk-ignite-ui/react";
import { useEffect, useState } from "react";
import { Button } from "@gdk-ignite-ui/react";

const ToastDemo = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 3000);
    }
  }, [isOpen]);

  return (
    <ToastProvider>
      <Button onClick={() => setIsOpen(true)}>Show Toast</Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />

      <ToastViewport />
    </ToastProvider>
  );
};

export default {
  title: "Data Display/Toast",
  component: ToastDemo,
  args: {
    title: "Toast Title",
    description: "Toast description",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};

export const WithoutDescription: StoryObj<ToastProps> = {
  args: {
    description: "",
  },
};
