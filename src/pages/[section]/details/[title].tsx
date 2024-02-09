import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { Details } from "@/components/details/Details";
import { hasSlugStringType } from "@/utils/type-guards";
import { QUERY_CLIENT } from "@/constants/query-client";
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

  await prefetchArticles(title);

  return {
    props: {
      dehydratedState: dehydrate(QUERY_CLIENT),
      title,
    },
  };
};

const DetailsPage: NextPage<Props> = ({ title }) => {
  return <Details title={title} />;
};

export default DetailsPage;
