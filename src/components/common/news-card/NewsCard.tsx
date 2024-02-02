import Image from "next/image";
import { News } from "../types";

export const NewsCard: React.FC<{ news: News }> = ({ news }) => {
  const { section, updated_date, title, abstract, multimedia } = news;
  const SECTION = section ? section : "world";
  const DATE = new Date(updated_date);
  const FORMATTED_DATE = Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h24",
  }).format(DATE);

  return (
    <article className="shadow-section">
      <div className="flex flex-wrap justify-between items-center py-5 px-3.75 gap-5 text-dark">
        <div className="py-1 px-2 bg-main rounded first-letter:capitalize text-light text-base leading-subtext font-semibold">
          {SECTION}
        </div>
        <p className="text-sm leading-subtext">{FORMATTED_DATE}</p>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{abstract}</p>
        </div>
      </div>
      <div>
        {multimedia.length && (
          <Image
            className="w-full h-auto"
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
