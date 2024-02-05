import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { QUERY_CLIENT } from "@/constants/query-client";
import { OPEN_SANS } from "@/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <main className={OPEN_SANS.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
