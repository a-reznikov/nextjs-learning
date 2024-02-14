import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { prefetchStories } from "@/api/stories/queries";
import { StoriesList } from "@/components/dream-stories/StoriesList";
import { hasSlugStringType } from "@/utils/type-guards";

type Props = {
  page: string;
  pageSize: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = hasSlugStringType(context.query.page) ? context.query.page : "1";
  const pageSize = hasSlugStringType(context.query.pageSize)
    ? context.query.pageSize
    : "2";

  try {
    await prefetchStories(page, pageSize);

    return {
      props: {
        page,
        pageSize,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const StoriesPage: NextPage<Props> = ({ page, pageSize }) => {
  return <StoriesList page={page} pageSize={pageSize} />;
};

export default StoriesPage;
