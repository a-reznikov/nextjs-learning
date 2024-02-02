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
    <article className="flex flex-col lg:flex-row shadow-section">
      <div className="flex flex-wrap lg:flex-col lg:justify-normal justify-between items-center lg:items-start py-5 px-3.75 lg:p-10 gap-5 text-dark">
        <div className="py-1 px-2 bg-main rounded first-letter:capitalize text-light text-base leading-subtext font-semibold">
          {SECTION}
        </div>
        <p className="text-sm leading-subtext lg:order-last lg:flex lg:grow lg:items-end">
          {FORMATTED_DATE}
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{abstract}</p>
        </div>
      </div>
      {multimedia.length && (
        <Image
          className="w-full basis-full object-cover min-h-70 xl:w-0 xl:basis-51 xl:shrink-0 xl:min-h-114.5"
          src={multimedia[0].url}
          width={375}
          height={280}
          alt={multimedia[0].type}
          priority
        />
      )}
    </article>
  );
};
