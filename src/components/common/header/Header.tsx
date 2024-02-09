import classNames from "classnames";
import { HEADER_NAVIGATION } from "@/constants/links";
import Logo from "@/icons/logo.svg";
import Menu from "@/icons/menu.svg";
import { CustomLink } from "../custom-link/CustomLink";

export type Props = {
  section: string;
};

export const Header: React.FC<Props> = ({ section }) => {
  return (
    <header className="w-full shadow-section">
      <div
        className={classNames(
          "container flex justify-between px-3.75 mx-auto",
          "sm:px-10"
        )}
      >
        <CustomLink href="/" className="my-4">
          <Logo />
        </CustomLink>
        <nav
          className={classNames(
            "hidden gap-x-8 text-subtext text-base font-semibold",
            "md:flex"
          )}
        >
          {HEADER_NAVIGATION.map(({ name, href }) => (
            <CustomLink
              key={name}
              href={href}
              className={classNames(
                "h-full py-3.5 border-y-4 border-transparent",
                {
                  "text-dark border-b-main": href.slice(1) === section,
                }
              )}
            >
              {name}
            </CustomLink>
          ))}
        </nav>
        <CustomLink href="/#" className={classNames("my-4", "md:hidden")}>
          <Menu />
        </CustomLink>
      </div>
    </header>
  );
};
