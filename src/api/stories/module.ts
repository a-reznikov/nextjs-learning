import { STRAPI_BASE_URL } from "@/constants/variables";
import { prepareStories } from "./formatter";

export const searchStories = async () => {
  const response: Response = await fetch(
    `${STRAPI_BASE_URL}/api/dream-stories?populate=*`
  );

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const { data } = await response.json();

  return prepareStories(data);
};
