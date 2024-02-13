import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { hasSlugStringType } from "@/utils/type-guards";
import { queryClient } from "@/constants/query-client";

type Props = {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = hasSlugStringType(context.query.id) ? context.query.id : "";

  try {
    if (!id) {
      throw new Error("Id missed");
    }

    //TODO implement prefetch

    return {
      props: {
        id,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const DetailsPage: NextPage<Props> = ({ id }) => {
  return <div>{id}</div>;
};

export default DetailsPage;
