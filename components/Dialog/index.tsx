import React from "react";
import { Close } from "../icons/Close";
import { DialogProps } from "./types";

export const Dialog = ({ title, children, onClose, visible }: DialogProps) => {
  const visibleStyle = visible ? "block" : "hidden";

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 bg-blackWithOpacity ${visibleStyle}`}
    >
      <div
        role="dialog"
        className="relative my-0 mx-lg max-w-xl rounded-md bg-white top-1/2 -translate-y-2/4 md:mx-auto"
      >
        {/* banner header */}
        <section className="flex justify-between py-sm px-md border-b border-neutral-100">
          <h3 className="font-semibold text-md">{title}</h3>
          <button onClick={onClose}>
            <Close color="#9698A5" />
          </button>
        </section>

        {/* banner main */}
        <section className="py-md px-lg">{children}</section>
      </div>
    </div>
  );
};
