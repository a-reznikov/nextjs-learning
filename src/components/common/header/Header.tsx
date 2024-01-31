import Image from "next/image";

import { openSans600 } from "@/styles/fonts";

const HEADER_NAVIGATION = [
  { name: "Home", href: "#", current: true },
  { name: "World", href: "#", current: false },
  { name: "Real Estate", href: "#", current: false },
  { name: "Finance", href: "#", current: false },
];

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

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
          />
        </a>
        <nav className="flex gap-x-8">
          {HEADER_NAVIGATION.map(({ name, href, current }) => (
            <a
              key={name}
              href={href}
              className={classNames(
                current
                  ? "text-dark after:absolute after:left-0 after:top-9.5 after:h-1 after:w-full after:bg-main"
                  : "text-subtext",
                `${openSans600.className} text-base relative`
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
