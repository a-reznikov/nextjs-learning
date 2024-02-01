import Image from "next/image";
import classNames from "classnames";
import { HEADER_NAVIGATION } from "@/constants/links";

export const Header: React.FC = () => {
  return (
    <header className="w-full shadow-header">
      <div className="container flex justify-between px-3.75 sm:px-10 mx-auto">
        <a href="/" className="my-4">
          <Image src="/logo.svg" width={129} height={28} alt="Logo" priority />
        </a>
        <nav className="hidden sm:flex gap-x-8 text-subtext text-base font-semibold">
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
        <a href="/" className="my-4 sm:hidden">
          <Image src="/menu.svg" width={28} height={28} alt="Menu" priority />
        </a>
      </div>
    </header>
  );
};
