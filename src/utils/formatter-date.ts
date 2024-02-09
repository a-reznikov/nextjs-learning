export const formateDate = (date: string) => {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h24",
  }).format(new Date(date));
};
