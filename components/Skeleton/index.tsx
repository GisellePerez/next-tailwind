import React from "react";
import { SkeletonProps } from "./types";

export const Skeleton = ({
  color = "bg-neutral-300",
  width = "w-full", // Default is 100%
  height = "h-1.5",
  isGradient = false,
}: SkeletonProps) => {
  return <div className={`${color} ${width} ${height} rounded-md`}></div>;
};
