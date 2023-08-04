import { cardPolicyData } from "@/data/data";
import { CardPolicyProps } from "@/types";
import Image from "next/image";
import React from "react";

function HomePolicyCard() {
    return (
        <div className="container overflow-hidden ">
            <div className="py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 border rounded-md">
                {cardPolicyData.map((card, index) => (
                    <CardPolicy key={index} card={card} />
                ))}
            </div>
        </div>
    );
}

export default HomePolicyCard;

const CardPolicy: React.FC<{ card: CardPolicyProps }> = ({ card }) => {
    return (
        <div className="h-20 border-b last:border-b-0 last:border-r-0 sm:border-b-0 sm:border-r flex items-center justify-center">
            <div className="flex items-center gap-3">
                <div className="w-10 aspect-square relative">
                    <Image alt={card.title + " image"} src={card.image} fill />
                </div>
                <div className="space-y-1">
                    <p className="font-bold">{card.title}</p>
                    <h5 className="text-tertiary">{card.text}</h5>
                </div>
            </div>
        </div>
    );
};
