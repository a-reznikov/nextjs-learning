import { NewsList } from "../common/news-list/NewsList";
import { PropsWithSlug } from "@/types";

export const Home: React.FC<PropsWithSlug> = ({ section }) => {
  return <NewsList section={section} />;
};
