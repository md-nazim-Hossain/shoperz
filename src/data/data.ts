import {
    CardPolicyProps,
    CurrencyProps,
    SocialProps,
    TopBarFeaturesProps,
} from "@/types";
import { BsShop } from "react-icons/bs";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaQuestion,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaShop } from "react-icons/fa6";
import {
    HiCurrencyBangladeshi,
    HiCurrencyDollar,
    HiCurrencyEuro,
    HiCurrencyPound,
    HiCurrencyRupee,
} from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";

export const cardPolicyData: CardPolicyProps[] = [
    {
        title: "Guarantee",
        image: "/assets/images/sheild.svg",
        text: " 12 Months",
    },
    {
        title: "Rate Paying",
        image: "/assets/images/paying.svg",
        text: " 4-12 Months",
    },
    {
        title: "Payments",
        image: "/assets/images/secure.svg",
        text: " 12 Months",
    },
    {
        title: "Free Delivery",
        image: "/assets/images/car.svg",
        text: "from $100",
    },
    {
        title: "Brands",
        image: "/assets/images/brand.svg",
        text: "Only Top",
    },
];

export const socialsData: SocialProps[] = [
    {
        Icon: FaFacebook,
        link: "www.facebook.com",
    },
    {
        Icon: FaInstagram,
        link: "www.instagram.com",
    },
    {
        Icon: FaLinkedin,
        link: "www.linkedin.com",
    },
    {
        Icon: FaTwitter,
        link: "www.twitter.com",
    },
    {
        Icon: FaYoutube,
        link: "www.youtube.com",
    },
];

export const topBarFeaturesData: TopBarFeaturesProps[] = [
    {
        title: "Track Order",
        link: "/track-order",
        Icon: FaLocationDot,
    },
    {
        title: "Shop",
        link: "/shop",
        Icon: FaShop,
    },
    {
        title: "Settings",
        link: "/settings",
        Icon: IoMdSettings,
    },
    {
        title: "FAQ",
        link: "/faq",
        Icon: FaQuestion,
    },
];

export const currencyData: CurrencyProps[] = [
    {
        title: "USD",
        Icon: HiCurrencyDollar,
        value: "usd",
    },
    {
        title: "BDT",
        Icon: HiCurrencyBangladeshi,
        value: "bdt",
    },
    {
        title: "EUR",
        Icon: HiCurrencyEuro,
        value: "eur",
    },
    {
        title: "POUND",
        Icon: HiCurrencyPound,
        value: "pound",
    },
    {
        title: "IND",
        Icon: HiCurrencyRupee,
        value: "ind",
    },
];

export const languageData: CurrencyProps[] = [
    {
        title: "English",
        Icon: MdOutlineLanguage,
        value: "eng",
    },
    {
        title: "Bangladeshi",
        Icon: MdOutlineLanguage,
        value: "bln",
    },
    {
        title: "Hindi",
        Icon: MdOutlineLanguage,
        value: "hin",
    },
];
