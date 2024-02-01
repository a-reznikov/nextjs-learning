import Image from "next/image";
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "@/constants/links";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-5 text-sm leading-subtext text-subtext font-normal border-t border-separator">
      <div className="flex justify-between items-center">
        <p>© 2022 Best News</p>
        <nav className="flex gap-x-5">
          {FOOTER_NAVIGATION.map(({ name, href }) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </nav>
        <div className="flex gap-x-2">
          {SOCIAL_LINKS.map(({ alt, src, href }) => (
            <a key={alt} href={href}>
              <Image src={src} width={24} height={24} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
