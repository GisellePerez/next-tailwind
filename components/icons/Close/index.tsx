import React from "react";
import { IconProps } from "../types";

export const Close = ({ color = "#000000", className }: IconProps) => {
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
        d="M4 4.00002L12.5161 12.5161M4 12.5161L12.5161 4"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        // stroke-linejoin="round"
      />
    </svg>
  );
};
