import { useRouter } from "next/router";
import Link from "next/link";
import { useNews } from "@/api/news/queries";
import { NewsCard } from "../news-card/NewsCard";
import { Loader } from "../loader/Loader";
import classNames from "classnames";

export const NewsList: React.FC = () => {
  const router = useRouter();
  const sectionFromUrl = router.asPath.slice(1) || "home";
  const { isPending, isError, data, error } = useNews(sectionFromUrl);

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
          <Link href={`${sectionFromUrl}/details/${++index}`} className="">
            <NewsCard news={news} index={index} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
