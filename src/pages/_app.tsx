import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { QUERY_CLIENT } from "@/constants/query-client";
import { RootLayout } from "@/layouts/root-layout/RootLayout";
import { OPEN_SANS } from "@/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={OPEN_SANS.className}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </main>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
