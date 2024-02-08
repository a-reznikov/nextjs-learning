import { PropsWithSlug } from "@/types";
import { NewsList } from "../common/news-list/NewsList";

export const Home: React.FC<PropsWithSlug> = ({ section }) => {
  return <NewsList section={section} />;
};
