import { useRouter } from "next/router";
import { NextPage } from "next";
import { NewsList } from "@/components/news-list/NewsList";
import { hasSlugStringType } from "@/utils/type-guards";

const SectionPage: NextPage = () => {
  const router = useRouter();
  const sectionName = hasSlugStringType(router.query.section)
    ? router.query.section
    : "";

  return <NewsList section={sectionName} />;
};

export default SectionPage;
