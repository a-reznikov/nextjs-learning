import Image from "next/image";
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "@/constants/links";
import { OPEN_SANS_400 } from "@/styles/fonts";

const Footer: React.FC = () => {
  return (
    <footer
      className={`${OPEN_SANS_400.className} w-full text-sm leading-subtext text-subtext`}
    >
      <div className="container px-10 py-5 mx-auto">
        <div className="flex relative justify-between items-center">
          <div className="absolute w-full h-px bg-separator -top-5"></div>
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
      </div>
    </footer>
  );
};

export { Footer };
