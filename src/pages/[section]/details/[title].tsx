import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { Details } from "@/components/details/Details";
import { hasSlugStringType } from "@/utils/type-guards";
import { queryClient } from "@/constants/query-client";
import { prefetchArticles } from "@/api/articles/queries";

type Props = {
  title: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = hasSlugStringType(context.query.title)
    ? context.query.title
    : "";

  try {
    if (!title) {
      throw new Error("Title missed");
    }

    await prefetchArticles(title);

    return {
      props: {
        title,
        dehydratedState: dehydrate(queryClient),
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
