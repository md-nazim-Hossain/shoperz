import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
};

export function ModalContainer({
  children,
  title,
  description,
  footer,
  trigger,
  className,
}: Props) {
  return (
    <Dialog open>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={cn("w-max max-w-[700px] p-5 bg-white", className)}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
