import { useArticles } from "@/api/articles/queries";
import { Loader } from "../common/loader/Loader";
import { NewsDetails } from "./components/news-details/NewsDetails";

type Props = {
  title: string;
};

export const Details: React.FC<Props> = ({ title }) => {
  const { isPending, isError, data, error } = useArticles(title);

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
        <p>{`We don't have any news on this request.`}</p>
      )}
    </>
  );
};
