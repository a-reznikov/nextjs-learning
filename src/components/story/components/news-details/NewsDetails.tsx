import Image from "next/image";
import classNames from "classnames";
import { Article } from "@/api/articles/types";

type Props = {
  article: Article;
};

export const NewsDetails: React.FC<Props> = ({ article }) => {
  const { section, date, title, abstract, paragraph, imgUrl, imgAlt } = article;

  return (
    <article
      className={classNames(
        "w-full flex flex-col justify-between gap-5",
        "lg:pl-[3.75rem] lg:pr-[8.75rem]"
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
      <div
        className={classNames(
          "relative w-full overflow-hidden h-70",
          "md:rounded-[5px]",
          "lg:h-114.5"
        )}
      >
        <Image
          className="object-cover"
          src={imgUrl}
          fill={true}
          sizes="(min-width: 1024px) 70vw, 100vw"
          alt={imgAlt}
          priority
        />
      </div>
      <div
        className={classNames(
          "flex flex-col px-3.75 gap-4 text-dark",
          "lg:px-0"
        )}
      >
        <h1 className="text-h1 leading-h1 font-semibold">{title}</h1>
        <p className="italic">{abstract}</p>
        <p className="pt-6">{paragraph}</p>
      </div>
    </article>
  );
};
