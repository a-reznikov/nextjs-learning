import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { prefetchStories } from "@/api/stories/queries";
import { StoriesList } from "@/components/dream-stories/StoriesList";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await prefetchStories();

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
};

const StoriesPage: NextPage<Props> = () => {
  return <StoriesList />;
};

export default StoriesPage;
