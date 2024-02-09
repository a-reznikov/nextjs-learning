import { useArticles } from "@/api/articles/queries";
import { NewsDetails } from "./components/news-details/NewsDetails";

export type Props = {
  title: string;
};

export const Details: React.FC<Props> = ({ title }) => {
  const { isError, data, error } = useArticles(title);

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
