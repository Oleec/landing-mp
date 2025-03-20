export const theme = {
  colors: {
    primary: "#99ff99",
    white: "#ffffff",
    gray: "#949494",
    black: "#000000",
  },
  fonts: {
    main: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  spacing: {
    section: "5rem",
    container: "1200px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
} as const;

export type Theme = typeof theme; 