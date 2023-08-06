import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  title: string | ReactNode;
  className?: string;
};
function TitleWrapper({ title, className }: Props) {
  return (
    <h3
      className={cn(
        "text-tertiary w-max font-medium border-b border-b-primary pb-1",
        className
      )}
    >
      {title}
    </h3>
  );
}

export default TitleWrapper;
