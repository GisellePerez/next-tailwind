import React, { ReactElement } from "react";
import { ResultCardItemProp, ResultCardProps } from "./types";

const ResultCardItem = ({ label, val }: ResultCardItemProp): ReactElement => {
  const valueColor = val
    ? "text-neutral-900 font-semibold"
    : " text-neutral-400";

  return (
    <div className="w-6/12">
      <h5 className="text-sm text-neutral-400">{label}</h5>
      <p className={`text-sm  ${valueColor}`}>{val || "-"}</p>
    </div>
  );
};

export const ResultCard = ({
  type = "",
  value = "",
  name = "",
  priority = "",
}: ResultCardProps): ReactElement => {
  return (
    <div className="grid gap-3 grid-cols-2 bg-secondary-50 border-secondary-100 py-xs px-sm">
      <ResultCardItem label="Type" val={type} />
      <ResultCardItem label="Value" val={value} />
      <ResultCardItem label="Name" val={name} />
      <ResultCardItem label="Priority" val={priority} />
    </div>
  );
};
