import Link, { LinkProps } from "next/link";
import classNames from "classnames";

type Props = {
  className: string;
} & LinkProps;

export const CustomLink: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Link
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
