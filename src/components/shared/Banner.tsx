"use client";
import { Banner } from "@/types";
import Image from "next/image";
import React, { CSSProperties } from "react";

type Props = {
    banner: Banner;
    isCol?: boolean;
};

function Banner({ banner, isCol = false }: Props) {
    const bannerTitle = banner?.title.split(" ");

    return (
        <>
            {isCol ? (
                <div
                    style={
                        {
                            "--first-color": `${banner?.color[0]}`,
                            "--second-color": `${banner?.color[1]}`,
                        } as CSSProperties
                    }
                    className="banner px-10 py-7"
                >
                    <p className="w-full text-2xl md:text-3xl uppercase break-words">
                        {banner?.title}
                    </p>

                    <div className=" w-full h-[140px] relative">
                        <Image alt="Banner Images" src={banner?.image} fill />
                    </div>
                </div>
            ) : (
                <div
                    style={
                        {
                            "--first-color": `${banner?.color[0]}`,
                            "--second-color": `${banner?.color[1]}`,
                        } as CSSProperties
                    }
                    className="banner px-10 py-7"
                >
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
                        <p className="w-full sm:w-1/2 text-2xl md:text-3xl uppercase break-words">
                            {bannerTitle
                                ?.slice(0, bannerTitle?.length - 1)
                                .map((item, index) => {
                                    return (
                                        <span
                                            className="ml-2 first:ml-0"
                                            key={index}
                                        >
                                            {item}
                                        </span>
                                    );
                                })}
                            <span className="font-semibold ml-2">
                                {bannerTitle[bannerTitle?.length - 1]}
                            </span>
                        </p>

                        <div className=" w-[240px] sm:w-0 sm:flex-1 h-[140px] relative flex-shrink-0">
                            <Image
                                alt="Banner Images"
                                src={banner?.image}
                                fill
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Banner;
