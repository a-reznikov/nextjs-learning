import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { Formulas } from "@/components/formulas/Formulas";
import { prefetchFormulas } from "@/api/formulas/queries";

type Props = {
  section: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await prefetchFormulas();

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

const FormulasPage: NextPage<Props> = () => {
  return <Formulas />;
};

export default FormulasPage;
