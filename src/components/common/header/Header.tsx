import Image from "next/image";
import classNames from "classnames";
import { HEADER_NAVIGATION } from "@/constants/links";

export const Header: React.FC = () => {
  return (
    <header className="w-full shadow-section">
      <div
        className={classNames(
          "container flex justify-between px-3.75 mx-auto",
          "sm:px-10"
        )}
      >
        <a href="/" className="my-4">
          <Image
            src="/icons/logo.svg"
            width={129}
            height={28}
            alt="Logo"
            priority
          />
        </a>
        <nav
          className={classNames(
            "hidden gap-x-8 text-subtext text-base font-semibold",
            "sm:flex"
          )}
        >
          {HEADER_NAVIGATION.map(({ name, href, current }) => (
            <a
              key={name}
              href={href}
              className={classNames(
                "h-full py-3.5 border-y-4 border-transparent",
                {
                  "text-dark border-b-main": current,
                }
              )}
              aria-current={current ? "page" : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
        <a href="/" className={classNames("my-4", "sm:hidden")}>
          <Image
            src="/icons/menu.svg"
            width={28}
            height={28}
            alt="Menu"
            priority
          />
        </a>
      </div>
    </header>
  );
};
