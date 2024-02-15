import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { MathJaxContext } from "better-react-mathjax";
import { queryClient } from "@/constants/query-client";
import { ROUTES } from "@/constants/routes";
import { RootLayout } from "@/layouts/root-layout/RootLayout";
import { OPEN_SANS } from "@/fonts";
import { hasSlugStringType } from "@/utils/type-guards";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const section = hasSlugStringType(router.query.section)
    ? router.query.section
    : router.asPath.includes(ROUTES.STORIES)
      ? ROUTES.STORIES
      : "home";

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <MathJaxContext>
          <main className={OPEN_SANS.className}>
            <RootLayout section={section}>
              <Component {...pageProps} />
            </RootLayout>
          </main>
        </MathJaxContext>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
