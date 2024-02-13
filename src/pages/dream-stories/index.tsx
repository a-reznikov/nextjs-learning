import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { prefetchStories } from "@/api/stories/queries";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await prefetchStories("dream-stories");

    return {
      props: {
        response,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const StoriesPage: NextPage<Props> = ({ response }) => {
  return <div>Stories</div>;
};

export default StoriesPage;
