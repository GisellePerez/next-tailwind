import React from "react";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-2xl">
      <div className="ml-1">
        <Image
          className="flex-1"
          src="/images/logo-gray.png"
          width="68"
          height="20"
          alt="Trendy"
        />
      </div>
    </footer>
  );
};
