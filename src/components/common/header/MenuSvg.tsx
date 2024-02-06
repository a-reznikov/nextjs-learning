import * as React from "react";
import { SVGProps } from "react";

export const MenuSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5.09C2 4.489 2.467 4 3.043 4h21.913C25.533 4 26 4.488 26 5.09c0 .603-.467 1.092-1.044 1.092H3.043C2.467 6.182 2 5.693 2 5.09ZM2 14c0-.602.467-1.09 1.043-1.09h21.913c.577 0 1.044.488 1.044 1.09 0 .602-.467 1.09-1.044 1.09H3.043C2.467 15.09 2 14.603 2 14Zm0 8.91c0-.603.467-1.092 1.043-1.092h21.913c.577 0 1.044.489 1.044 1.091 0 .603-.467 1.091-1.044 1.091H3.043C2.467 24 2 23.512 2 22.91Z"
      clipRule="evenodd"
    />
  </svg>
);
