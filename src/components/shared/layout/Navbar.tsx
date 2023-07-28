"use client";
import React from "react";
import { SelectComponents } from "../SelectComponents";
import { navData } from "@/data/navData";
import { Navbar } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-primary/70">
      <div className="container flex justify-between">
        {navData.map((nav: Navbar, index: number) => {
          return (
            <div key={index} className="w-full">
              {nav?.subCategory?.length ? (
                <Select key={index}>
                  <SelectTrigger className="outline-none focus:ring-0 focus:ring-offset-0 border-0 border-r border-r-primary/70 rounded-none text-white font-medium ">
                    <SelectValue placeholder={nav?.category} />
                  </SelectTrigger>
                  <SelectContent className="rounded">
                    <SelectGroup>
                      {nav?.subCategory.map((item, index: number) => {
                        return (
                          <Link key={index} href={item?.href}>
                            <SelectItem
                              className="border-none rounded-none"
                              value={item.name}
                            >
                              {item?.name}
                            </SelectItem>
                          </Link>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : (
                <Link
                  className={`${
                    index !== navData.length - 1
                      ? "border-r border-r-primary/70"
                      : ""
                  } h-full flex justify-center items-center text-white font-medium`}
                  href={nav?.href}
                >
                  {nav?.category}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
