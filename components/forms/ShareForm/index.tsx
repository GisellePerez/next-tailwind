import React from "react";
import { Button } from "../../Button";
import { Tag } from "../../Tag";

export const ShareForm = () => {
  const dummyFn = () => {};

  const subtitleStyles = "text-md mb-2xs";

  return (
    <div>
      <h4 className={subtitleStyles}>Direct Link</h4>
      <form className="flex justify-between py-3xs px-2xs mb-xs bg-neutral-50 rounded-md">
        <input
          className="w-full text-sm bg-neutral-50"
          type="text"
          placeholder="trady.dev/dns/aweasdkrh2903jas..."
        />
        <Button size="sm" onClick={() => console.log("copy")}>
          Copy
        </Button>
      </form>

      <h4 className={subtitleStyles}>Send as an email invited</h4>
      <form className="flex gap-x-2 px-2xs py-3xs mb-xs border border-secondary-600 rounded-md">
        <Tag onClose={dummyFn}>nico@trady.com</Tag>
        <Tag onClose={dummyFn}>tom@trady.com</Tag>
        <input
          className="w-full text-sm"
          name="attendees"
          type="text"
          value="another@guest.com"
        />
      </form>
    </div>
  );
};
