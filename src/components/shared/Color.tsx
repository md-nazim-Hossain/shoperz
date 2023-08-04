"use client";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Button } from "../ui/button";

type Props = {
  colors: string[];
};
function Color({ colors }: Props) {
  const whiteColor = ["white", "#ffffff", "#fff"];
  const [activeColor, setActiveColor] = useState<string[]>([]);
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color: string, index: number) => {
        const isColorInclude = activeColor.includes(color);
        return (
          <Button
            onClick={() => {
              if (isColorInclude) {
                setActiveColor(activeColor.filter(x => x !== color));
              } else {
                setActiveColor([...activeColor, color]);
              }
            }}
            style={{
              backgroundColor: color,
            }}
            className="w-6 flex items-center justify-center flex-shrink-0 p-0 h-6 rounded-md border shadow"
            key={index}
          >
            {isColorInclude && (
              <BiCheck
                className={`${
                  whiteColor.includes(color) ? "text-tertiary" : "text-white"
                }`}
              />
            )}
          </Button>
        );
      })}
    </div>
  );
}

export default Color;
