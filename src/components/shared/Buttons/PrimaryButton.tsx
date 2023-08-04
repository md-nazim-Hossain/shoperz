import React from "react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type Props = {
    title: string;
    Icon?: IconType | any;
    type?: "button" | "submit" | "reset";
    method?: () => any;
    className?: string;
    iconStyle?: string;
};
function PrimaryButton({
    title,
    Icon,
    type = "button",
    method,
    className,
    iconStyle,
}: Props) {
    return (
        <button
            type={type}
            onClick={method}
            className={twMerge(
                "bg-primary/70 hover:bg-primary duration-300 font-medium text-white px-5 py-3 rounded-3xl flex justify-center items-center space-x-2",
                className
            )}
        >
            <span>{title}</span>
            {Icon && <Icon className={iconStyle} />}
        </button>
    );
}

export default PrimaryButton;
