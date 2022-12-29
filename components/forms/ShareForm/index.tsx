import React, { useState } from "react";
import { Button } from "../../Button";
import { Tag } from "../../Tag";

export const ShareForm = () => {
  const [inputValue, setInputValue] = useState("another@guest.com");

  const subtitleStyles = "mb-2xs text-md text-neutral-900";

  const dummyFn = () => {};

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
      <form className="flex flex-wrap gap-x-2 px-3xs py-3xs mb-xs border border-secondary-600 rounded-md md:flex-nowrap md:px-2xs">
        <Tag onClose={dummyFn}>nico@trady.com</Tag>
        <Tag onClose={dummyFn}>tom@trady.com</Tag>
        <input
          className="py-2xs w-full text-sm"
          name="attendees"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};
