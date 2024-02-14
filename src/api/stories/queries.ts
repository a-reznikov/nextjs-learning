import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { ONE_MINUTE } from "@/constants/time";
import { searchStories, searchStory } from "./module";

enum QueryKeys {
  STORIES = "dream-stories",
  STORY = "story",
}

export const useStories = (page: string, pageSize: string) =>
  useQuery({
    queryKey: [QueryKeys.STORIES, page, pageSize],
    queryFn: () => searchStories(page, pageSize),
    staleTime: ONE_MINUTE,
  });

export const prefetchStories = async (page: string, pageSize: string) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.STORIES, page, pageSize],
    queryFn: () => searchStories(page, pageSize),
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
