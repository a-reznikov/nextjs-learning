import classNames from "classnames";
import { CurrentNews } from "./current-news/CurrentNews";

export const Details: React.FC = () => {
  return (
    <div className={classNames("w-full py-5", "lg:py-10")}>
      <CurrentNews />
    </div>
  );
};
