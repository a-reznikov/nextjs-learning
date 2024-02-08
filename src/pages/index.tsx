import { dehydrate } from "@tanstack/react-query";
import { NewsList } from "@/components/news-list/NewsList";
import { prefetchNews } from "@/api/news/queries";
import { QUERY_CLIENT } from "@/constants/query-client";

export async function getStaticProps() {
  await prefetchNews("home");

  return {
    props: {
      dehydratedState: dehydrate(QUERY_CLIENT),
    },
  };
}

export default function HomePage() {
  return <NewsList section={"home"} />;
}
