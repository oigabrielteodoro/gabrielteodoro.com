import type { AppProps } from "next/app";
import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  html: {
    fontSize: "62.5%",
    fontFamily: "$text",
  },
  body: {
    backgroundColor: "$white",
  },
  button: {
    cursor: "pointer",
  },
  a: {
    textDecoration: "none",
  },
  ul: {
    listStyle: "none",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
