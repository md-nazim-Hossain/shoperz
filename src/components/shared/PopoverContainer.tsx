import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  children: React.ReactNode;
  trigger?: React.ReactNode | string;
  className?: string;
  open?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>>;
};
function PopoverContainer({
  children,
  trigger,
  className,
  open,
  onChange,
}: Props) {
  return (
    <Popover open={open} onOpenChange={onChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className={cn("w-80", className)}>
        {children}
      </PopoverContent>
    </Popover>
  );
}

export default PopoverContainer;
