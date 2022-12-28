import React from "react";

import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-center border-b border-neutral-50 py-lg">
      <p>Point your domain at</p>
      <div className="ml-1">
        <Image
          className="flex-1"
          src="/images/logo.png"
          width="68"
          height="20"
          alt="Trendy"
        />
      </div>
    </header>
  );
};
