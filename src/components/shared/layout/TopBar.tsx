"use client";
import { Button } from "@/components/ui/button";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  currencyData,
  languageData,
  socialsData,
  topBarFeaturesData,
} from "@/data/data";
import { CurrencyProps, SocialProps, TopBarFeaturesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SelectComponents } from "../SelectComponents";

function TopBar() {
  const [currencyIcon, setCurrencyIcon] = useState("usd");
  const [lan, setLan] = useState("eng");
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-2">
      <div className="text-secondary container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="border-r pr-3">
            <SelectComponentsWithIcon
              data={languageData}
              setState={setLan}
              state={lan}
              placeholder="Language"
            />
          </div>
          <SelectComponentsWithIcon
            data={currencyData}
            setState={setCurrencyIcon}
            state={currencyIcon}
            placeholder="Currency"
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="bg-transparent hover:bg-transparent lg:hidden flex justify-center items-center">
              <AiOutlineMenu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="w-full h-full p-5 flex flex-col justify-between items-center"
          >
            <SheetHeader>
              <Link
                onClick={() => setOpen(false)}
                href={"/"}
                className="w-[100px] sm:w-[148px] h-[40px] relative md:mx-0"
              >
                <Image fill src={"/assets/logo/shoperz-black.svg"} alt="logo" />
              </Link>
            </SheetHeader>
            <div className="flex justify-center items-center ">
              <div className="space-y-7">
                {topBarFeaturesData.map(
                  (feature: TopBarFeaturesProps, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={feature?.link}
                        onClick={() => setOpen(false)}
                        className="px-6 py-.5 text-secondary group hover:text-tertiary flex items-center gap-1"
                      >
                        <feature.Icon size={18} />
                        <h6 className="group-hover:text-tertiary">
                          {feature?.title}
                        </h6>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
            <SheetFooter className="flex items-center justify-center p-3">
              <div className="flex items-center gap-5">
                {socialsData.map((social: SocialProps, index: number) => {
                  return (
                    <Link
                      onClick={() => setOpen(false)}
                      target="_blank"
                      href={social?.link}
                      key={index}
                    >
                      <social.Icon
                        size={20}
                        className="hover:text-tertiary text-secondary"
                      />
                    </Link>
                  );
                })}
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-5 border-r pr-6">
            {socialsData.map((social: SocialProps, index: number) => {
              return (
                <Link href={social?.link} key={index}>
                  <social.Icon size={20} className="hover:text-tertiary" />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            {topBarFeaturesData.map(
              (feature: TopBarFeaturesProps, index: number) => {
                return (
                  <Link
                    key={index}
                    href={feature?.link}
                    className="px-6 py-.5 group hover:text-tertiary flex items-center gap-1 border-r last:border-r-0"
                  >
                    <feature.Icon size={18} />
                    <h6 className="group-hover:text-tertiary">
                      {feature?.title}
                    </h6>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

const SelectComponentsWithIcon: React.FC<{
  data: CurrencyProps[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}> = ({ data, setState, state, placeholder }) => {
  const Icon: CurrencyProps | undefined = data.find(
    (currency: CurrencyProps) => {
      return currency.value === state;
    }
  );
  return (
    <div className="w-[117px] flex items-center gap-1 text-secondary">
      <div className="flex-shrink-0 w-5 aspect-square">
        {Icon && <Icon.Icon className="w-full h-full" />}
      </div>
      <SelectComponents
        onChange={e => setState(e)}
        placeholder={placeholder}
        className="flex-1 outline-none p-2 focus:ring-0 focus:ring-offset-0 border-0 text-tertiary/60"
      >
        <SelectGroup onVolumeChange={e => console.log(e)}>
          {data.map((currency: CurrencyProps, index: number) => {
            return (
              <SelectItem key={index} value={currency?.value}>
                {currency?.title}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectComponents>
    </div>
  );
};
