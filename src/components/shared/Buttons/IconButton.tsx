/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";
type Props = {
  method?: () => void;
  className?: string;
  Icon?: IconType;
  type?: "button" | "submit" | "reset";
  size?: number;
  [key: string]: any;
};
function IconButton({
  method,
  className,
  Icon,
  type = "button",
  size = 16,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      type={type}
      onClick={method}
      className={twMerge(
        "w-9 duration-100 disabled:text-tertiary/50 aspect-square rounded-full bg-gray-200 flex justify-center items-center ",
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
