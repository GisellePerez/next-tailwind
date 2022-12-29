import React from "react";
import { IconProps } from "../types";

export const Github = ({ color = "#222542", className }: IconProps) => {
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
        d="M10 14.6667V12C10.0928 11.1649 9.85329 10.3268 9.33334 9.66671C11.3333 9.66671 13.3333 8.33337 13.3333 6.00004C13.3867 5.16671 13.1533 4.34671 12.6667 3.66671C12.8533 2.90004 12.8533 2.10004 12.6667 1.33337C12.6667 1.33337 12 1.33337 10.6667 2.33337C8.90667 2.00004 7.09334 2.00004 5.33334 2.33337C4 1.33337 3.33334 1.33337 3.33334 1.33337C3.13334 2.10004 3.13334 2.90004 3.33334 3.66671C2.84792 4.34396 2.61232 5.16856 2.66667 6.00004C2.66667 8.33337 4.66667 9.66671 6.66667 9.66671C6.40667 9.99337 6.21334 10.3667 6.1 10.7667C5.98667 11.1667 5.95334 11.5867 6 12V14.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99998 12.0001C2.99331 13.3334 2.66665 10.6667 1.33331 10.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
