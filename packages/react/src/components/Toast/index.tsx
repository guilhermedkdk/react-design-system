import { ComponentProps } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from "./styles";

export const ToastProvider = ToastPrimitive.Provider;

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description?: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRoot {...props}>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
      <ToastClose>
        <X weight="bold" size={20} />
      </ToastClose>
    </ToastRoot>
  );
}

export { ToastViewport };

Toast.displayName = "Toast";
