import classNames from "classnames";
import { NewsList } from "../common/news-list/NewsList";

export const Home: React.FC = () => {
  return (
    <div className={classNames("w-full py-5", "lg:py-10")}>
      <NewsList />
    </div>
  );
};
