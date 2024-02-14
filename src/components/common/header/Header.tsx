import { useState } from "react";
import classNames from "classnames";
import { HEADER_NAVIGATION } from "@/constants/links";
import Logo from "@/icons/logo.svg";
import Menu from "@/icons/menu.svg";
import Cross from "@/icons/cross.svg";
import { CustomLink } from "../custom-link/CustomLink";

export type Props = {
  section: string;
};

export const Header: React.FC<Props> = ({ section }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

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
        <div
          className={classNames(
            "absolute w-full h-lvh top-16 left-0 pt-4 bg-white z-10",
            "sm:px-10",
            "md:static md:block md:h-auto md:w-auto md:p-0",
            { hidden: !isOpenedMenu }
          )}
        >
          <nav
            className={classNames(
              "container flex flex-col gap-y-5 px-3.75 mx-auto gap-x-8 text-subtext text-base font-semibold",
              "sm:px-10",
              "md:flex md:flex-row md:px-0"
            )}
          >
            {HEADER_NAVIGATION.map(({ name, href }) => (
              <CustomLink
                key={name}
                href={href}
                onClick={() => setIsOpenedMenu(false)}
                className={classNames(
                  "block w-fit border-y-4 border-transparent",
                  "md:h-full md:py-3.5",
                  {
                    "text-dark border-b-main": href.slice(1) === section,
                  }
                )}
              >
                {name}
              </CustomLink>
            ))}
          </nav>
        </div>
        <div
          className={classNames(
            "transition duration-300 ease-out hover:ease-in hover:text-main cursor-pointer my-4",
            "md:hidden"
          )}
          onClick={() => setIsOpenedMenu(!isOpenedMenu)}
        >
          {isOpenedMenu ? <Cross /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
