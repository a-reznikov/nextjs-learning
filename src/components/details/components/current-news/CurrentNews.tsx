import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNews } from "@/api/news/queries";
import { NewsDetails } from "../news-details/NewsDetails";
import { Loader } from "@/components/common/loader/Loader";

export const CurrentNews: React.FC = () => {
  const router = useRouter();
  const [, sectionFromUrl, , idFromUrl] = router.asPath.split("/");
  const { isPending, isError, data, error } = useNews(sectionFromUrl);
  const [isNews, setIsNews] = useState(false);
  const idNews: number = +idFromUrl - 1;

  useEffect(() => {
    if (data && data.length > idNews && Number.isInteger(idNews)) {
      setIsNews(true);
    } else {
      setIsNews(false);
    }
  }, [data, idNews]);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {isNews ? (
        <NewsDetails news={data[idNews]} />
      ) : (
        <p>We don't have any news on this request.</p>
      )}
    </>
  );
};
