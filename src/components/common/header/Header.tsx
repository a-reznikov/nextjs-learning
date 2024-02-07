import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HEADER_NAVIGATION } from "@/constants/links";
import { hasSlugStringType } from "@/utils/type-guards";
import Logo from "/public/icons/logo.svg";
import Menu from "/public/icons/menu.svg";

export const Header: React.FC = () => {
  const router = useRouter();
  const sectionName: string | string[] | undefined = router.query.section;
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
        <Link href="/" className="my-4 links">
          <Logo />
        </Link>
        <nav
          className={classNames(
            "hidden gap-x-8 text-subtext text-base font-semibold",
            "md:flex"
          )}
        >
          {HEADER_NAVIGATION.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={classNames(
                "h-full py-3.5 border-y-4 border-transparent links",
                {
                  "text-dark border-b-main": href.slice(1) === currentSection,
                }
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
        <a href="#" className={classNames("my-4 links", "md:hidden")}>
          <Menu />
        </a>
      </div>
    </header>
  );
};
