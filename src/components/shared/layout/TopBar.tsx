"use client";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import {
    currencyData,
    languageData,
    socialsData,
    topBarFeaturesData,
} from "@/data/data";
import { CurrencyProps, SocialProps, TopBarFeaturesProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { SelectComponents } from "../SelectComponents";

function TopBar() {
    const [currencyIcon, setCurrencyIcon] = useState("usd");
    const [lan, setLan] = useState("eng");
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
                <div className="flex items-center">
                    <div className="flex items-center gap-5 border-r pr-6">
                        {socialsData.map(
                            (social: SocialProps, index: number) => {
                                return (
                                    <Link href={social?.link} key={index}>
                                        <social.Icon size={20} />
                                    </Link>
                                );
                            }
                        )}
                    </div>
                    <div className="flex items-center">
                        {topBarFeaturesData.map(
                            (feature: TopBarFeaturesProps, index: number) => {
                                return (
                                    <Link
                                        key={index}
                                        href={feature?.link}
                                        className="px-6 py-.5 flex items-center gap-1 border-r last:border-r-0"
                                    >
                                        <feature.Icon size={18} />
                                        <h6>{feature?.title}</h6>
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
