import React from "react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  Icon?: IconType | any;
  type?: "button" | "submit" | "reset";
  method?: () => any;
  className?: string;
};
function PrimaryButton({
  title,
  Icon,
  type = "button",
  method,
  className,
}: Props) {
  return (
    <button
      type={type}
      onClick={method}
      className={twMerge(
        "bg-primary font-medium text-white px-5 py-3 rounded-3xl flex justify-center items-center space-x-2",
        className
      )}
    >
      <span>{title}</span>
      {Icon && <Icon />}
    </button>
  );
}

export default PrimaryButton;
