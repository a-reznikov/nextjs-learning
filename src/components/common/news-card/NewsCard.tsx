import Image from "next/image";
import { News } from "../types";

export const NewsCard: React.FC<{ news: News }> = ({ news }) => {
  const { section, updated_date, title, abstract, multimedia } = news;

  return (
    <article>
      <div className="py-5 px-3.75">
        <p>{section ? section : "world!!"}</p>
        <p>{updated_date}</p>
        <div>
          <h2>{title}</h2>
          <p>{abstract}</p>
        </div>
      </div>
      <div>
        {multimedia.length && (
          <Image
            src={multimedia[0].url}
            width={375}
            height={280}
            alt={multimedia[0].type}
            priority
          />
        )}
      </div>
    </article>
  );
};
