import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { queryClient } from "@/constants/query-client";
import { RootLayout } from "@/layouts/root-layout/RootLayout";
import { OPEN_SANS } from "@/fonts";
import "@/styles/globals.css";
import { hasSlugStringType } from "@/utils/type-guards";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const section = hasSlugStringType(router.query.section)
    ? router.query.section
    : "home";

  console.log(section);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={OPEN_SANS.className}>
          <RootLayout section={section}>
            <Component {...pageProps} />
          </RootLayout>
        </main>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
