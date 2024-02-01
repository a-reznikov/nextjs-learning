import Image from "next/image";
import { HEADER_NAVIGATION } from "@/constants/links";
import { filterClassNames } from "@/utils/filter-class-names";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-header">
      <div className="container flex justify-between items-center px-10 mx-auto">
        <a href="/">
          <Image
            className="my-4"
            src="/logo.svg"
            width={129}
            height={28}
            alt="Logo"
            priority
          />
        </a>
        <nav className="flex gap-x-8">
          {HEADER_NAVIGATION.map(({ name, href, current }) => (
            <a
              key={name}
              href={href}
              className={filterClassNames(
                current
                  ? "text-dark after:absolute after:left-0 after:top-9.5 after:h-1 after:w-full after:bg-main"
                  : "text-subtext",
                "text-base font-semibold relative"
              )}
              aria-current={current ? "page" : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export { Header };
