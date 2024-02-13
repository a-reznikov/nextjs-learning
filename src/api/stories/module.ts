import { STRAPI_BASE_URL } from "@/constants/variables";

export const searchStories = async () => {
  const response: Response = await fetch(
    `${STRAPI_BASE_URL}dream-stories?populate=*`
  );

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const result = await response.json();

  return result;
};
