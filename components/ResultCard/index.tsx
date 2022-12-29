import React, { ReactElement } from "react";
import { Skeleton } from "../Skeleton";
import { ResultCardItemProp, ResultCardProps } from "./types";

const ResultCardItem = ({
  label,
  val,
  isLoading,
  className,
}: ResultCardItemProp): ReactElement => {
  const valueColor = val
    ? "text-neutral-900 font-semibold"
    : " text-neutral-400";

  return (
    <div className={`w-6/12 ${className}`}>
      {isLoading ? (
        <Skeleton className="mb-2xs" maxWidth="max-w-skeletonLg" isGradient />
      ) : (
        <h5 className="text-sm text-neutral-400">{label}</h5>
      )}
      {isLoading ? (
        <Skeleton maxWidth="max-w-skeletonSm" isGradient />
      ) : (
        <p className={`text-sm  ${valueColor}`}>{val || "-"}</p>
      )}
    </div>
  );
};

export const ResultCard = ({
  type = "",
  value = "",
  name = "",
  priority = "",
  isLoading,
}: ResultCardProps): ReactElement => {
  const background = isLoading ? "bg-white" : "bg-secondary-50";
  const borderColor = isLoading ? "border-neutral-100" : "border-secondary-100";

  return (
    <div
      className={`grid gap-3 grid-cols-2 py-xs px-sm rounded-md border ${borderColor} ${background}`}
    >
      <ResultCardItem
        className={isLoading ? "mb-xs" : ""}
        isLoading={isLoading}
        label="Type"
        val={type}
      />
      <ResultCardItem
        className={isLoading ? "mb-xs" : ""}
        isLoading={isLoading}
        label="Value"
        val={value}
      />

      <ResultCardItem isLoading={isLoading} label="Name" val={name} />
      <ResultCardItem isLoading={isLoading} label="Priority" val={priority} />
    </div>
  );
};
