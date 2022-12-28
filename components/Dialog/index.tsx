import React from "react";
import { Close } from "../icons/Close";
import { AlertProps } from "./types";

export const Dialog = ({ title, children, onClose }: AlertProps) => {
  return (
    <div role="dialog" className="my-0 mx-auto max-w-xl rounded-md border">
      {/* banner header */}
      <section className="flex justify-between py-sm px-md border border-neutral-100 ">
        <h3 className="font-semibold text-md">{title}</h3>
        <button onClick={onClose}>
          <Close color="#9698A5" />
        </button>
      </section>

      {/* banner main */}
      <section className="py-md px-lg">{children}</section>
    </div>
  );
};
