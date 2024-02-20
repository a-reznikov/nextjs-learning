import { STRAPI_BASE_URL } from "@/constants/variables";

export const searchFormulas = async () => {
  const response: Response = await fetch(`${STRAPI_BASE_URL}/api/formulas`);

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const { data } = await response.json();

  return data;
};
