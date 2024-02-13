import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { ONE_MINUTE } from "@/constants/time";
import { searchStories, searchStory } from "./module";

enum QueryKeys {
  STORIES = "dream-stories",
  STORY = "story",
}

export const useStories = () =>
  useQuery({
    queryKey: [QueryKeys.STORIES],
    queryFn: () => searchStories(),
    staleTime: ONE_MINUTE,
  });

export const prefetchStories = async () =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.STORIES],
    queryFn: () => searchStories(),
  });

export const useStory = (id: string) =>
  useQuery({
    queryKey: [QueryKeys.STORY, id],
    queryFn: () => searchStory(id),
    staleTime: ONE_MINUTE,
  });

export const prefetchStory = async (id: string) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.STORY, id],
    queryFn: () => searchStory(id),
  });
