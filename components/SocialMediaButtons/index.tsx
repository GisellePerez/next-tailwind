import React from "react";
import { IconButton } from "../IconButton";
import { Facebook } from "../icons/Facebook";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";

export const SocialMediaButtons = () => {
  const dummyFn = (text: string) => {
    console.log({ text });
  };
  return (
    <section className="flex justify-center gap-4 pt-xs">
      <IconButton ariaLabel="Facebook" onClick={() => dummyFn("Facebook")}>
        <Facebook />
      </IconButton>
      <IconButton ariaLabel="Twitter" onClick={() => dummyFn("Twitter")}>
        <Twitter />
      </IconButton>
      <IconButton ariaLabel="Github" onClick={() => dummyFn("Github")}>
        <Github />
      </IconButton>
    </section>
  );
};
