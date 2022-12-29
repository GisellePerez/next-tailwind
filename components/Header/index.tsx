import React from "react";

import { Trady } from "../icons/Trady";

export const Header = () => {
  return (
    <header className="flex items-center justify-center border-b border-neutral-50 py-lg">
      <p className="mr-1">Point your domain at</p>

      <Trady />
    </header>
  );
};
