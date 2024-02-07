import { useRouter } from "next/router";
import { NewsDetails } from "../news-details/NewsDetails";
import { Loader } from "@/components/common/loader/Loader";
import { useArticles } from "@/api/articles/queries";
import { hasSlugStringType } from "@/utils/type-guards";

export const CurrentNews: React.FC = () => {
  const router = useRouter();
  const titleFromUrl = router.query.id;
  const { isPending, isError, data, error } = useArticles(
    hasSlugStringType(titleFromUrl) ? titleFromUrl : ""
  );

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data ? (
        <NewsDetails article={data} />
      ) : (
        <p>We don't have any news on this request.</p>
      )}
    </>
  );
};
