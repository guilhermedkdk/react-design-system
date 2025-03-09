import * as ToastPrimitive from "@radix-ui/react-toast";
import { keyframes, styled } from "../../styles";

const VIEWPORT_PADDING = 32;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

export const ToastRoot = styled(ToastPrimitive.Root, {
  position: "relative",
  display: "flex",
  flexDirection: "column",

  width: 360,
  padding: "$3 $5",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  gap: "$1",

  backgroundColor: "$gray600",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms ease`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
});

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontFamily: "$default",
  fontSize: "$xl",
  fontWeight: "$bold",
  lineHeight: "$base",

  color: "$white",
});

export const ToastDescription = styled(ToastPrimitive.Description, {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$medium",
  lineHeight: "$base",

  color: "$gray200",
});

export const ToastClose = styled(ToastPrimitive.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
  cursor: "pointer",

  border: "none",
  background: "none",
  color: "$gray200",
});

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  zIndex: 9999,

  display: "flex",
  flexDirection: "column",

  padding: "$6",
  maxWidth: "100vw",
  width: 390,

  margin: 0,
  gap: "$2",
  outline: "none",
  listStyle: "none",
});
