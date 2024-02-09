import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { NewsList } from "@/components/news-list/NewsList";
import { hasSlugStringType } from "@/utils/type-guards";
import { prefetchNews } from "@/api/news/queries";
import { QUERY_CLIENT } from "@/constants/query-client";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const section = hasSlugStringType(context.query.section)
    ? context.query.section
    : "";

  await prefetchNews(section);

  return {
    props: {
      dehydratedState: dehydrate(QUERY_CLIENT),
      section,
    },
  };
};

const SectionPage: NextPage<Props> = ({ section }) => {
  return <NewsList section={section} />;
};

export default SectionPage;
