
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Util } from "../Utils/Util";

const ContactLabel = React.forwardRef((props, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={Util(
      "text-sm text-start font-medium text-[#291c3a] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.className
    )}
    {...props}
  />
));

ContactLabel.displayName = LabelPrimitive.Root.displayName;

export { ContactLabel };