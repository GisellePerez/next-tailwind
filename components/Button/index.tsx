import React from "react";
import { ButtonProps } from "./types";

export const Button = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const buttonColors =
    variant === "primary"
      ? "bg-primary-500"
      : "bg-white border border-neutral-500";
  const textColor = variant === "primary" ? "text-white" : "text-neutral-900";

  return (
    <button
      className={`py-2xs px-xs ${buttonColors} ${textColor} rounded-md font-semibold`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
