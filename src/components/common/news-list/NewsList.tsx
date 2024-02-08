import Link from "next/link";
import classNames from "classnames";
import { useNews } from "@/api/news/queries";
import { hasSlugStringType } from "@/utils/type-guards";
import { PropsWithSlug } from "@/types";
import { NewsCard } from "../news-card/NewsCard";
import { Loader } from "../loader/Loader";

export const NewsList: React.FC<PropsWithSlug> = ({ section }) => {
  const { isPending, isError, data, error } = useNews(
    hasSlugStringType(section) ? section : ""
  );

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {data.map((news, index) => (
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
