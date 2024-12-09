import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Cheader from "./components/header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cheader />
      <Component {...pageProps} />
    </>
  );
}
