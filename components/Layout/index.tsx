import React from "react";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return <div className="m-5">{children}</div>;
};
