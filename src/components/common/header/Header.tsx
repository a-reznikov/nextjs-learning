import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HEADER_NAVIGATION } from "@/constants/links";
import Logo from "/public/icons/logo.svg";
import Menu from "/public/icons/menu.svg";

export const Header: React.FC = () => {
  const router = useRouter();
  const [, sectionFromUrl] = router.asPath.split("/");
  const [currentPage, setCurrentPage] = useState(sectionFromUrl);

  useEffect(() => {
    if (!sectionFromUrl) {
      setCurrentPage("home");
    } else {
      setCurrentPage(sectionFromUrl);
    }
  }, [sectionFromUrl]);

  return (
    <header className="w-full shadow-section">
      <div
        className={classNames(
          "container flex justify-between px-3.75 mx-auto",
          "sm:px-10"
        )}
      >
        <a href="/" className="my-4">
          <Logo />
        </a>
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
                "h-full py-3.5 border-y-4 border-transparent",
                {
                  "text-dark border-b-main": href.slice(1) === currentPage,
                }
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
        <a
          href="#"
          className={classNames(
            "my-4 transition duration-300 ease-out hover:ease-in hover:text-main",
            "md:hidden"
          )}
        >
          <Menu />
        </a>
      </div>
    </header>
  );
};
