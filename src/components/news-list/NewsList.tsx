import Link from "next/link";
import classNames from "classnames";
import { useNews } from "@/api/news/queries";
import { NewsCard } from "./components/news-card/NewsCard";

export type Props = {
  section: string;
};

export const NewsList: React.FC<Props> = ({ section }) => {
  const { data } = useNews(section);

  return (
    <ul className="flex flex-col gap-5">
      {data?.map((news, index) => (
        <li
          key={news.uri}
          className={classNames(
            "transition duration-300 ease-out hover:ease-in",
            "md:hover:scale-105"
          )}
        >
          <Link href={`${section}/details/${news.title}`}>
            <NewsCard news={news} index={index} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
