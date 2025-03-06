import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",

  border: "2px solid $gray900",
  borderRadius: "$sm",

  backgroundColor: "$gray900",

  variants: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  defaultVariants: {
    size: "md",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  color: "$gray400",
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  color: "$white",

  width: "100%",
  border: 0,
  background: "transparent",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});
