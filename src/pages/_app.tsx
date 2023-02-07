import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import {ThemeProvider} from "@mui/material";

const customBreakpointTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customBreakpointTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
