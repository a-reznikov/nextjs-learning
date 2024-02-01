import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { OPEN_SANS } from "@/fonts";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={OPEN_SANS.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
