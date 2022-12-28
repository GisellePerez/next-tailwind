import React from "react";
import { Close } from "../icons/Close";
import { TagProps } from "./types";

export const Tag = ({ children, onClose }: TagProps) => {
  return (
    <div className="grid grid-cols-[_1fr,_auto] gap-1 items-center py-2xs px-xs max-w-fit text-sm rounded-sm bg-secondary-100">
      {children}

      <button onClick={onClose}>
        <Close />
      </button>
    </div>
  );
};
