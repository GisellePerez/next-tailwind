import React from "react";
import { GridSectionProps } from "./types";

export const GridSection = ({ children, title, padding }: GridSectionProps) => {
  const sectionPadding = padding && `${padding}`;

  return (
    <section className={`${sectionPadding}`}>
      {title && <h3 className="text-neutral-600 pb-xs">{title}</h3>}

      <section className="grid grid grid-cols-2 gap-y-5 gap-x-8">
        {children}
      </section>
    </section>
  );
};
