"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BsSlash } from "react-icons/bs";

function BreadCurmb() {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/").filter((x) => x);
  return (
    <div
      className={`pt-10 flex items-center gap-1 ${
        splitPathname.length > 1 ? "block" : "hidden"
      }`}
    >
      {splitPathname.map((path: string, index: number) => (
        <h5 className="capitalize space-x-1 flex items-center" key={index}>
          <span>{path}</span>
          {index !== splitPathname.length - 1 && <BsSlash size={24} />}
        </h5>
      ))}
    </div>
  );
}

export default BreadCurmb;
