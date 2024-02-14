import Image from "next/image";
import classNames from "classnames";
import { Story } from "@/api/stories/types";

type Props = {
  story: Story;
  index: number;
};

export const StoryCard: React.FC<Props> = ({ story, index }) => {
  const { title, description, date, imgUrl, imgAlt } = story;

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
          Dream Stories
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
          <p>{description}</p>
        </div>
      </div>
      <div
        className={classNames(
          "relative w-full shrink-0 h-70",
          "lg:w-[51%] lg:h-114.5"
        )}
      >
        <Image
          className="object-cover"
          src={imgUrl}
          fill={true}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={imgAlt}
          priority={!index}
        />
      </div>
    </article>
  );
};
