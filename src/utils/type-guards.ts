export const hasSlugStringType = (
  query: string | string[] | undefined
): query is string => {
  return typeof query === "string";
};
