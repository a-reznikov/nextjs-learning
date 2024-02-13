export const hasSlugStringType = (slug: unknown): slug is string => {
  return typeof slug === "string";
};
