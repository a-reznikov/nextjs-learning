import Image from "next/image";
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "@/constants/links";

export const Footer: React.FC = () => {
  return (
    <footer className="sm:w-full mx-3.75 sm:mx-auto py-5 text-sm leading-subtext text-subtext font-normal border-t border-separator">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <nav className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
          {FOOTER_NAVIGATION.map(({ name, href }) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </nav>
        <div className="flex gap-x-8 md:gap-x-2 md:order-last">
          {SOCIAL_LINKS.map(({ alt, src, href }) => (
            <a key={alt} href={href}>
              <Image
                className="md:w-6 md:h-6"
                src={src}
                width={40}
                height={40}
                alt={alt}
              />
            </a>
          ))}
        </div>
        <p className="md:order-first">© 2022 Best News</p>
      </div>
    </footer>
  );
};
