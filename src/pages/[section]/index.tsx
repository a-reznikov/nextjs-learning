import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { NewsList } from "@/components/news-list/NewsList";
import { hasSlugStringType } from "@/utils/type-guards";
import { prefetchNews } from "@/api/news/queries";
import { queryClient } from "@/constants/query-client";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const section = hasSlugStringType(context.query.section)
    ? context.query.section
    : "";

  try {
    if (!section) {
      throw new Error("Section missed");
    }

    await prefetchNews(section);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        section,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const SectionPage: NextPage<Props> = ({ section }) => {
  return <NewsList section={section} />;
};

export default SectionPage;
