import { dehydrate } from "@tanstack/react-query";
import { NewsList } from "@/components/news-list/NewsList";
import { prefetchNews } from "@/api/news/queries";
import { queryClient } from "@/constants/query-client";

export async function getServerSideProps() {
  try {
    await prefetchNews("home");

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default function HomePage() {
  return <NewsList section={"home"} />;
}
