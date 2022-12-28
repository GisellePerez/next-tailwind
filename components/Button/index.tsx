import React from "react";
import { ArrowRight } from "../icons/ArrowRight";
import { ButtonProps, ButtonSize } from "./types";

const getFontSizeBySize = (size: ButtonSize): string => {
  switch (size) {
    case "sm":
      return "text-sm";

    case "lg":
      return "text-md";

    case "md":
    default:
      return "text-base";
  }
};

export const Button = ({
  onClick,
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  withIcon = false,
  className,
}: ButtonProps) => {
  const buttonColors =
    variant === "primary"
      ? "bg-primary-500"
      : "bg-white border border-neutral-500";
  const textColor = variant === "primary" ? "text-white" : "text-neutral-900";
  const arrowColor = variant === "primary" ? "#DCDDE1" : "#222542";
  // const fontSize = size === "md" ? "text-base" : "text-sm";
  const fontSize = getFontSizeBySize(size);
  const borderRadius = size === "sm" ? "rounded-sm" : "rounded-md";
  const paddingY = size === "lg" ? "py-md" : "py-2xs";
  const minWidth = size === "lg" ? "min-w-[70%]" : "";

  return (
    <button
      type="button"
      className={`grid grid-cols-[_1fr,_auto] gap-1 items-center ${paddingY} px-xs ${minWidth} ${buttonColors} ${textColor} ${fontSize} ${borderRadius} font-semibold ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <p className="pb-0.5">{children}</p>

      {withIcon && <ArrowRight className="mb-0.5" color={arrowColor} />}
    </button>
  );
};
