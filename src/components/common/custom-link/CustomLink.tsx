import Link, { LinkProps } from "next/link";
import classNames from "classnames";

type Props = React.PropsWithChildren &
  LinkProps & {
    href: string;
    className: string;
  };

export const CustomLink: React.FC<Props> = ({
  children,
  href,
  className,
  ...otherProps
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "transition duration-300 ease-out hover:ease-in hover:text-main",
        className
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
