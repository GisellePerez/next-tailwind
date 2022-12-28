import React from "react";
import { IconButtonProps } from "./types";

export const IconButton = ({
  children,
  ariaLabel,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center w-9 h-9 border border-neutral-100 rounded-full"
    >
      {children}
    </button>
  );
};
