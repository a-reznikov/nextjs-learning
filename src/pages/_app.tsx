import type { AppProps } from "next/app";
import { OPEN_SANS } from "@/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={OPEN_SANS.className}>
      <Component {...pageProps} />
    </main>
  );
}
