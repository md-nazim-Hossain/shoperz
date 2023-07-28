"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  placeholder: string;
  children: React.ReactNode;
  className?: string;
  onChange?: (e: string) => void;
};
export function SelectComponents({
  placeholder,
  children,
  className,
  onChange,
}: Props) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
