import React from "react";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons/lib";
import Image from "next/image";
type Props = {
    method?: () => any;
    className?: string;
    Icon?: IconType;
    type?: "button" | "submit" | "reset";
    size?: number;
};
function IconButton({
    method,
    className,
    Icon,
    type = "button",
    size = 16,
}: Props) {
    return (
        <button
            type={type}
            onClick={method}
            className={twMerge(
                "w-9 duration-100 aspect-square rounded-full bg-gray-200 flex justify-center items-center ",
                className
            )}
        >
            {Icon ? (
                <Icon size={size} />
            ) : (
                <Image
                    src="/assets/logo/shop.svg"
                    alt="Shopping cart"
                    width={13}
                    height={11}
                />
            )}
        </button>
    );
}

export default IconButton;
