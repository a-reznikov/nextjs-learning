import Image from "next/image";
import classNames from "classnames";
import { News } from "../../../api/news/types";

type Props = {
  news: News;
};

export const NewsCard: React.FC<Props> = ({ news }) => {
  const { section, date, title, abstract, imgUrl, imgAlt } = news;

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
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{abstract}</p>
        </div>
      </div>
      <div
        className={classNames(
          "relative w-full basis-full overflow-hidden min-h-[280px] max-h-[280px]",
          "lg:basis-[51%] lg:shrink-0 lg:min-h-[458px] lg:max-h-[458px]"
        )}
      >
        <Image
          className="object-cover w-full h-auto"
          src={imgUrl}
          fill={true}
          sizes="100%"
          alt={imgAlt}
          priority
        />
      </div>
    </article>
  );
};
