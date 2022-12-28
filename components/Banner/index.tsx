import Image from "next/image";
import React from "react";
import { BannerProps } from "./types";

export const Banner = ({ label = "Your DNS host is", image }: BannerProps) => {
  return (
    <section className="py-sm bg-secondary-100 flex items-center justify-center rounded-md">
      <p>{label}</p>
      {image && (
        <div className="ml-1">
          <Image src={image} height="20" width="124" alt="google domains" />
        </div>
      )}
    </section>
  );
};
