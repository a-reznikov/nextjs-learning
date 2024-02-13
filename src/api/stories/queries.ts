import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { ONE_MINUTE } from "@/constants/time";
import { searchStories } from "./module";

enum QueryKeys {
  STORIES = "dream-stories",
}

export const useStories = () =>
  useQuery({
    queryKey: [QueryKeys.STORIES],
    queryFn: () => searchStories(),
    staleTime: ONE_MINUTE,
  });

export const prefetchStories = async (stories: string) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.STORIES],
    queryFn: () => searchStories(),
  });
