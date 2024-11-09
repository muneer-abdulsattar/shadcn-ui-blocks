import { badgeVariants } from "@/components/ui/badge";
import React from "react";

const ClickableBadgeDemo = () => {
  return (
    <button
      className={badgeVariants({
        className: "cursor-pointer select-none focus:ring-offset-1",
      })}
    >
      Clickable
    </button>
  );
};

export default ClickableBadgeDemo;
