import * as React from "react";
import { SVGProps } from "react";

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle
        className="fill-cyan-active"
        fill="#2F2F2F"
        cx={28}
        cy={28}
        r={28}
      />
      <path
        className="fill-white"
        fill="#B1B1B1"
        d="M23 19v18l5-5.058L33 37V19z"
      />
    </g>
  </svg>
);

export default Bookmark;
