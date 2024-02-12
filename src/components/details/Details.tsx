import { useArticles } from "@/api/articles/queries";
import { NewsDetails } from "./components/news-details/NewsDetails";

type Props = {
  title: string;
};

export const Details: React.FC<Props> = ({ title }) => {
  const { data } = useArticles(title);

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
