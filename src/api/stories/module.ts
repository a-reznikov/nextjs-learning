import { STRAPI_BASE_URL } from "@/constants/variables";
import { prepareStories, prepareStory } from "./formatter";

export const searchStories = async (page: string, pageSize: string) => {
  const response: Response = await fetch(
    `${STRAPI_BASE_URL}/api/dream-stories?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const result = await response.json();

  const { data } = result;

  return prepareStories(data);
};

export const searchStory = async (id: string) => {
  const response: Response = await fetch(
    `${STRAPI_BASE_URL}/api/dream-stories/${id}?populate=*`
  );

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const { data } = await response.json();

  return prepareStory(data);
};
