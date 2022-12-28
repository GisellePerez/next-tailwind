import React from "react";
import { ArrowRight } from "../icons/ArrowRight";
import { CardProps } from "./types";

export const Card = ({
  title,
  description,
  variant,
  onClick = () => {},
  withIcon = false,
}: CardProps) => {
  const cardColors =
    variant === "primary"
      ? "bg-primary-500"
      : "bg-white border border-neutral-100";
  const titleColor = variant === "primary" ? "text-white" : "text-neutral-900";
  const descriptionColor =
    variant === "primary" ? "text-white" : "text-neutral-600";
  const arrowColor = variant === "primary" ? "#DCDDE1" : "#222542";

  return (
    <div
      className={`grid grid-cols-[_1fr,_auto] gap-4 items-center p-xs border border-neutral-50 rounded-md  ${cardColors}`}
      onClick={onClick}
    >
      <div>
        <h3 className={`${titleColor} font-semibold`}>{title}</h3>
        <p className={`${descriptionColor} text-sm`}>{description}</p>
      </div>

      {withIcon && <ArrowRight color={arrowColor} />}
    </div>
  );
};
