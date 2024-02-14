import { useStory } from "@/api/stories/queries";
import { Loader } from "../common/loader/Loader";
import { StoryDetails } from "./components/story-details/StoryDetails";

type Props = {
  id: string;
};

export const Story: React.FC<Props> = ({ id }) => {
  const { isPending, isError, data, error } = useStory(id);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data ? (
        <StoryDetails story={data} />
      ) : (
        <p>{`We don't have any story on this request.`}</p>
      )}
    </>
  );
};
