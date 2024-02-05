import { NewsList } from "../common/news-list/NewsList";

export const Home: React.FC = () => {
  return (
    <div className="w-full py-10">
      <NewsList section={"home"} />
    </div>
  );
};
