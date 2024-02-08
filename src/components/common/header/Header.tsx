import { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HEADER_NAVIGATION } from "@/constants/links";
import { hasSlugStringType } from "@/utils/type-guards";
import Logo from "@/icons/logo.svg";
import Menu from "@/icons/menu.svg";
import { CustomLink } from "../custom-link/CustomLink";

export const Header: React.FC = () => {
  const router = useRouter();
  const sectionName = router.query.section;
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    if (router.isReady && hasSlugStringType(sectionName)) {
      setCurrentSection(sectionName);
    } else if (router.isReady && !hasSlugStringType(sectionName)) {
      setCurrentSection("home");
    }
  }, [router.isReady, sectionName]);

  return (
    <header className="w-full shadow-section">
      <div
        className={classNames(
          "container flex justify-between px-3.75 mx-auto",
          "sm:px-10"
        )}
      >
        <CustomLink href="/" className="my-4" scroll={true}>
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
                  "text-dark border-b-main": href.slice(1) === currentSection,
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
