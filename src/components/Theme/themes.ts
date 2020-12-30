export type IThemeColors = Record<
  "primary" | "secondary" | "error" | "paperBorder" | "autofill",
  string
> & {
  background: Record<"default" | "paper", string>;
} & {
  checkbox: Record<"default", string>;
} & {
  divider: string;
} & {
  font: Record<
    "default" | "gray" | "button" | "textButton" | "textDisabled",
    string
  >;
} & {
  gray: Record<"default" | "disabled", string>;
} & {
  input: Record<
    | "default"
    | "border"
    | "disabled"
    | "disabledBackground"
    | "disabledText"
    | "error"
    | "text"
    | "textHover",
    string
  >;
} & {
  theme: "dark" | "light";
};

export const dark: IThemeColors = {
  autofill: "#5D5881",
  background: {
    default: "#1D1E1F",
    paper: "#2E2F31"
  },
  checkbox: {
    default: "#FFFFFF"
  },
  divider: "#252728",
  error: "#f34235",
  font: {
    button: "#202124",
    default: "#FCFCFC",
    gray: "#9E9D9D",
    textButton: "#FFFFFF",
    textDisabled: "#FCFCFC"
  },
  gray: {
    default: "#202124",
    disabled: "rgba(32, 33, 36, 0.6)"
  },
  input: {
    border: "#9d9d9d",
    default: "#25262A",
    disabled: "#393939",
    disabledBackground: "#292A2D",
    disabledText: "#9D9D9D",
    error: "#8C2054",
    text: "#FCFCFC",
    textHover: "#616161"
  },
  paperBorder: "#252728",
  primary: "#09E9DF",
  secondary: "#4d8482",
  theme: "dark"
};
export const light: IThemeColors = {
  autofill: "#f4f6c5",
  background: {
    default: "#f3f2ef",
    paper: "#FFFFFF"
  },
  checkbox: {
    default: "#616161"
  },
  divider: "#EAEAEA",
  error: "#f34235",
  font: {
    button: "#FFFFFF",
    default: "#101415",
    gray: "#3D4041",
    textButton: "#1bc9b8",
    textDisabled: "#616161"
  },
  gray: {
    default: "#C8C8C8",
    disabled: "rgba(216, 216, 216, 0.3)"
  },
  input: {
    border: "#BDBDBD",
    default: "#FFFFFF",
    disabled: "#EAEAEA",
    disabledBackground: "#F4F4F4",
    disabledText: "#9D9D9D",
    error: "#f34235",
    text: "#3D3D3D",
    textHover: "#616161"
  },
  paperBorder: "#d6cec2",
  primary: "#09ccc2",
  secondary: "#4a7475",
  theme: "light"
};
