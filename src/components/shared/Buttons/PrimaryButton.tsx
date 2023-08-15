import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  Icon?: IconType | LucideIcon;
  type?: "button" | "submit" | "reset";
  method?: () => void;
  className?: string;
  iconStyle?: string;
  [key: string]: unknown;
};
function PrimaryButton({
  title,
  Icon,
  type = "button",
  method,
  className,
  iconStyle,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      type={type}
      onClick={method}
      className={twMerge(
        "bg-primary/70 hover:bg-primary duration-300 font-medium text-white px-5 py-3 rounded-3xl flex justify-center items-center space-x-2",
        className
      )}
    >
      <span>{title}</span>
      {Icon && <Icon className={iconStyle} />}
    </Button>
  );
}

export default PrimaryButton;
