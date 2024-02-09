import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { Details } from "@/components/details/Details";
import { hasSlugStringType } from "@/utils/type-guards";
import { queryClient } from "@/constants/query-client";
import { prefetchArticles } from "@/api/articles/queries";

type Props = {
  title: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const title = hasSlugStringType(context.query.title)
    ? context.query.title
    : "";

  try {
    await prefetchArticles(title);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        title,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const DetailsPage: NextPage<Props> = ({ title }) => {
  return <Details title={title} />;
};

export default DetailsPage;
