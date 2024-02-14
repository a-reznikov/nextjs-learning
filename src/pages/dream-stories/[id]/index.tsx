import { GetServerSideProps, NextPage } from "next";
import { dehydrate } from "@tanstack/react-query";
import { hasSlugStringType } from "@/utils/type-guards";
import { queryClient } from "@/constants/query-client";
import { prefetchStory } from "@/api/stories/queries";
import { Story } from "@/components/story/Story";

type Props = {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = hasSlugStringType(context.query.id) ? context.query.id : "";

  try {
    if (!id) {
      throw new Error("Id missed");
    }

    await prefetchStory(id);

    return {
      props: {
        id,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const StoryPage: NextPage<Props> = ({ id }) => {
  return <Story id={id} />;
};

export default StoryPage;
