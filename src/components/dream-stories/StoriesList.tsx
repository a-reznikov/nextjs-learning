import Link from "next/link";
import classNames from "classnames";
import { useStories } from "@/api/stories/queries";
import { Loader } from "../common/loader/Loader";
import { Pagination } from "../common/pagination/Pagination";
import { StoryCard } from "./components/story-card/StoryCard";

type Props = {
  page: string;
  pageSize: string;
};

export const StoriesList: React.FC<Props> = ({ page, pageSize }) => {
  const { isPending, isError, data, error } = useStories(page, pageSize);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const {
    data: stories,
    meta: { pagination },
  } = data;

  return (
    <section className="flex flex-col gap-y-8">
      <ul className="flex flex-col gap-5">
        {stories?.map((story, index) => (
          <li
            key={story.id}
            className={classNames(
              "transition duration-300 ease-out hover:ease-in",
              "md:hover:scale-105"
            )}
          >
            <Link href={`dream-stories/${story.id}`}>
              <StoryCard story={story} index={index} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination pagination={pagination} />
    </section>
  );
};
