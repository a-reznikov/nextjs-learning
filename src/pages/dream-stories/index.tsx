import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    //TODO implement prefetch

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

const DreamsPage: NextPage<Props> = () => {
  return <div>Dreams</div>;
};

export default DreamsPage;
