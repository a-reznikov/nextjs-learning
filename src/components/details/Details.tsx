import classNames from "classnames";
import { CurrentNews } from "./current-news/CurrentNews";

export const Details: React.FC = () => {
  return (
    <div className={classNames("w-full flex justify-center py-5", "lg:py-10")}>
      <CurrentNews />
    </div>
  );
};
