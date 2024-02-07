import classNames from "classnames";
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "@/constants/links";
import React from "react";
import { CustomLink } from "../custom-link/CustomLink";

export const Footer: React.FC = () => {
  return (
    <footer
      className={classNames(
        "py-5 mx-3.75 text-sm leading-subtext text-subtext font-normal border-t border-separator",
        "sm:w-full sm:mx-auto"
      )}
    >
      <div
        className={classNames(
          "flex flex-col justify-between items-center gap-8",
          "md:flex-row"
        )}
      >
        <nav
          className={classNames(
            "flex flex-col items-center gap-5",
            "lg:flex-row lg:gap-8"
          )}
        >
          {FOOTER_NAVIGATION.map(({ name, href }) => (
            <div key={name}>
              <CustomLink href={href} className="hover:text-dark">
                {name}
              </CustomLink>
            </div>
          ))}
        </nav>
        <div className={classNames("flex gap-x-8", "md:gap-x-2 md:order-last")}>
          {SOCIAL_LINKS.map(({ alt, component, href }) => (
            <div key={alt} className="flex">
              <CustomLink
                href={href}
                className={classNames("w-10 h-10", "md:w-6 md:h-6")}
              >
                {React.createElement(component)}
              </CustomLink>
            </div>
          ))}
        </div>
        <p className="md:order-first">© 2022 Best News</p>
      </div>
    </footer>
  );
};
