import Image from "next/image";
import classNames from "classnames";
import { News } from "@/api/news-section/types";

export const NewsDetails: React.FC<{ news: News }> = ({ news }) => {
  const { section, date, title, abstract, imgUrl, imgAlt, byline } = news;

  //TODO implement adaptive
  return (
    <article
      className={classNames(
        "flex flex-col shadow-section justify-between",
        "lg:flex-row"
      )}
    >
      <div
        className={classNames(
          "flex flex-wrap justify-between items-center py-5 px-3.75 gap-5 text-dark",
          "lg:flex-col lg:justify-normal lg:items-start lg:p-10"
        )}
      >
        <div className="py-1 px-2 bg-main rounded first-letter:capitalize text-light text-base leading-subtext font-semibold">
          {section}
        </div>
        <p
          className={classNames(
            "text-sm leading-subtext",
            "lg:order-last lg:flex lg:grow lg:items-end"
          )}
        >
          {date}
        </p>
      </div>
      <Image
        className={classNames(
          "w-full basis-full object-cover min-h-70 max-h-70",
          "lg:w-0 lg:basis-51 lg:shrink-0 lg:min-h-114.5 lg:max-h-114.5"
        )}
        src={imgUrl}
        width={375}
        height={280}
        alt={imgAlt}
        priority
      />
      <div
        className={classNames(
          "flex flex-col py-5 px-3.75 gap-4 text-dark",
          "lg:p-10"
        )}
      >
        <h1 className="text-h1 leading-h1 font-semibold">{title}</h1>
        <p className="italic">{byline}</p>
        <p className="pt-6">{abstract}</p>
      </div>
    </article>
  );
};
