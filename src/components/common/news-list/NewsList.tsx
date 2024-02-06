import { useRouter } from "next/router";
import Link from "next/link";
import { useNews } from "@/api/news/queries";
import { NewsCard } from "../news-card/NewsCard";

export const NewsList: React.FC = () => {
  const router = useRouter();
  const sectionFromUrl = router.asPath.slice(1) || "home";
  const { isPending, isError, data, error } = useNews(sectionFromUrl);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {data.map((news, index) => (
        <li key={news.uri}>
          <Link href={`${sectionFromUrl}/details/${++index}`}>
            <NewsCard news={news} index={index} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
