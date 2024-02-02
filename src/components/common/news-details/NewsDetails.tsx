import { useNews } from "@/api/news-section/queries";
import { useRouter } from "next/router";

export const NewsDetails: React.FC = () => {
  const router = useRouter();
  const [, sectionFromUrl, , idFromUrl] = router.asPath.split("/");
  const { isPending, isError, data, error } = useNews(sectionFromUrl);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (data && idFromUrl !== "[id]") {
    // TODO render details
  }

  return <div>News Details</div>;
};
