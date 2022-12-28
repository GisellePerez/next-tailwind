import React from "react";
import { IconProps } from "../types";

export const Facebook = ({ color = "#2792F5", className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.6666 10.7934C14.6666 13.22 13.22 14.6667 10.7933 14.6667H9.99998C9.63331 14.6667 9.33331 14.3667 9.33331 14V10.1534C9.33331 9.97338 9.47997 9.82005 9.65997 9.82005L10.8333 9.80005C10.9266 9.79338 11.0067 9.72672 11.0267 9.63338L11.26 8.36005C11.28 8.24005 11.1866 8.12671 11.06 8.12671L9.63997 8.14671C9.45331 8.14671 9.30665 8.00005 9.29999 7.82005L9.27332 6.18671C9.27332 6.08004 9.35997 5.98671 9.47331 5.98671L11.0733 5.96004C11.1866 5.96004 11.2733 5.87338 11.2733 5.76005L11.2466 4.16003C11.2466 4.0467 11.16 3.96004 11.0467 3.96004L9.24664 3.98671C8.13998 4.00671 7.25999 4.91337 7.27999 6.02004L7.31331 7.85337C7.31998 8.04004 7.17332 8.18671 6.98665 8.19338L6.18665 8.20671C6.07331 8.20671 5.98665 8.29336 5.98665 8.4067L6.00665 9.67338C6.00665 9.78671 6.09331 9.87337 6.20664 9.87337L7.00665 9.86005C7.19332 9.86005 7.33997 10.0067 7.34664 10.1867L7.40664 13.9867C7.4133 14.36 7.1133 14.6667 6.73997 14.6667H5.20664C2.77998 14.6667 1.33331 13.22 1.33331 10.7867V5.20671C1.33331 2.78004 2.77998 1.33337 5.20664 1.33337H10.7933C13.22 1.33337 14.6666 2.78004 14.6666 5.20671V10.7934V10.7934Z"
        fill={color}
      />
    </svg>
  );
};
