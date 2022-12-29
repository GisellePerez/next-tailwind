import React from "react";
import { SkeletonProps } from "./types";

export const Skeleton = ({
  color = "bg-neutral-300",
  width = "w-full", // Default is 100%
  height = "h-1.5",
  maxWidth = "",
  isGradient = false,
  className = "",
}: SkeletonProps) => {
  const background = isGradient
    ? "bg-gradient-to-r from-neutral-300 to-transparent"
    : color;

  return (
    <div
      className={`${background} ${width} ${maxWidth} ${height} rounded-md ${className} animate-pulse`}
    ></div>
  );
};
