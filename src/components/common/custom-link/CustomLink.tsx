import Link from "next/link";
import classNames from "classnames";

type LinksProps = {
  href: string;
  className: string;
};

export const CustomLink: React.FC<React.PropsWithChildren & LinksProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "transition duration-300 ease-out hover:ease-in hover:text-main",
        className
      )}
    >
      {children}
    </Link>
  );
};
