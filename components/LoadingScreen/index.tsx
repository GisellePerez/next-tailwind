import React from "react";
import { GridSection } from "../GridSection";
import { ResultCard } from "../ResultCard";
import { Skeleton } from "../Skeleton";

export const LoadingScreen = () => {
  return (
    <section>
      <h4 className="mt-lg text-neutral-600 text-lg">
        Looking up dns host for domain
      </h4>
      <h3 className="mb-lg italic semibold text-neutral-900 text-xl font-medium">
        example.com
      </h3>

      <Skeleton
        className="mb-xl"
        isGradient
        maxWidth="max-w-[80%] md:max-w-[40%]"
      />

      <GridSection>
        {Array.from(Array(4)).map((_, i) => (
          <ResultCard key={i} isLoading />
        ))}
      </GridSection>
    </section>
  );
};
