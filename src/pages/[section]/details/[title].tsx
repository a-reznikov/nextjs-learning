import { useRouter } from "next/router";
import { NextPage } from "next";
import { Details } from "@/components/details/Details";
import { hasSlugStringType } from "@/utils/type-guards";

const DetailsPage: NextPage = () => {
  const router = useRouter();
  const title = hasSlugStringType(router.query.title) ? router.query.title : "";

  return <Details title={title} />;
};

export default DetailsPage;
