import React from "react";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return <div className="my-0 mx-auto">{children}</div>;
};
