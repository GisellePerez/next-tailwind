import Image from "next/image";
import React from "react";
import { Skeleton } from "../Skeleton";
import { BannerProps } from "./types";

export const Banner = ({
  label = "Your DNS host is",
  image,
  isLoading,
}: BannerProps) => {
  return (
    <section className="flex items-center justify-center py-sm bg-secondary-100 rounded-md">
      <p className="text-sm md:text-base">{label}</p>

      {isLoading ? (
        <Skeleton
          className="mt-4xs ml-xs max-w-skeletonSm md:max-w-skeletonLg"
          width="w-32"
          isGradient
        />
      ) : (
        image && (
          <div className="ml-1">
            <Image src={image} height="20" width="124" alt="google domains" />
          </div>
        )
      )}
    </section>
  );
};
