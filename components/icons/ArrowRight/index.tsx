import React from "react";
import { IconProps } from "../types";

export const ArrowRight = ({ color = "#000000", className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.025 4.94167L17.0833 10L12.025 15.0583"
        stroke={color}
        stroke-width="1.5"
        // stroke-miterlimit="10"
        stroke-linecap="round"
        // stroke-linejoin="round"
      />
      <path
        d="M2.91666 10H16.9417"
        stroke={color}
        stroke-width="1.5"
        // stroke-miterlimit="10"
        stroke-linecap="round"
        // stroke-linejoin="round"
      />
    </svg>
  );
};
