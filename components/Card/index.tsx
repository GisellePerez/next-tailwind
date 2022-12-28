import React from "react";
import { CardProps } from "./types";

export const Card = ({
  title,
  description,
  variant,
  onClick = () => {},
}: CardProps) => {
  const cardColors =
    variant === "primary"
      ? "bg-primary-500"
      : "bg-white border border-neutral-100";
  const titleColor = variant === "primary" ? "text-white" : "text-neutral-900";
  const descriptionColor =
    variant === "primary" ? "text-white" : "text-neutral-600";

  return (
    <div
      className={`p-xs border border-neutral-50 rounded-md ${cardColors}`}
      onClick={onClick}
    >
      <h3 className={`${titleColor} font-semibold`}>{title}</h3>
      <p className={`${descriptionColor} text-sm`}>{description}</p>
    </div>
  );
};
