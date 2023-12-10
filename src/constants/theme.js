const colors = {
  primary: "#133C55",
  "primary-darken-1": "#0B2332",
  secondary: "#84D2F6",
  "secondary-darken-1": "#54C0F2",
  error: "#B00020",
  info: "#2196F3",
  success: "#aCAF55",
  warning: "#FB8C00",
};

export const light = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    ...colors,
  },
};

export const dark = {
  dark: true,
  colors: {
    background: "#001624",
    surface: "#001624",
    ...colors,
  },
};
