import Image from "next/image";
import classNames from "classnames";
import { News } from "@/api/news/types";

export const NewsDetails: React.FC<{ news: News }> = ({ news }) => {
  const { section, date, title, abstract, imgUrl, imgAlt, byline } = news;

  return (
    <article
      className={classNames(
        "flex flex-col justify-between gap-5",
        "lg:pl-15 lg:pr-35"
      )}
    >
      <div
        className={classNames(
          "flex flex-wrap justify-between items-center px-3.75 gap-5 text-dark",
          "lg:justify-normal lg:items-center lg:px-0"
        )}
      >
        <div className="py-1 px-2 bg-main rounded first-letter:capitalize text-light text-base leading-subtext font-semibold">
          {section}
        </div>
        <p className="text-sm leading-subtext">{date}</p>
      </div>
      <Image
        className={classNames(
          "w-full object-cover min-h-70 max-h-70",
          "lg:min-h-114.5 lg:max-h-114.5"
        )}
        src={imgUrl}
        width={375}
        height={280}
        alt={imgAlt}
        priority
      />
      <div
        className={classNames(
          "flex flex-col px-3.75 gap-4 text-dark",
          "lg:px-0"
        )}
      >
        <h1 className="text-h1 leading-h1 font-semibold">{title}</h1>
        <p className="italic">{byline}</p>
        <p className="pt-6">{abstract}</p>
      </div>
    </article>
  );
};
