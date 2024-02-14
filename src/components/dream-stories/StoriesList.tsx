import Link from "next/link";
import classNames from "classnames";
import { useStories } from "@/api/stories/queries";
import { Loader } from "../common/loader/Loader";
import { StoryCard } from "./components/story-card/StoryCard";

export const StoriesList: React.FC = () => {
  const { isPending, isError, data, error } = useStories();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {data?.map((story, index) => (
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
  );
};
