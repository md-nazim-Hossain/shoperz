import { IconType } from "react-icons/lib";

export type Banner = {
  color: string[];
  image: string;
  title: string;
};

export type Footer = {
  title: string;
  link: string;
  new_tab: boolean;
};

export type Product = {
  quantity: number;
  image: string[];
  price: number;
  discount: number;
  category: string;
  subCategory: string;
  brand: string;
  description: string[];
  color: string[];
  model: string;
  ram?: "2GB" | "4GB" | "6GB" | "8GB" | "12GB" | "16GB" | "32GB";
  processor?: "octa-core" | "quad-core" | "hexa-core" | "single-core";
  id: string;
  sold: number;
  totalReview: number;
  rating: number;
  slug: string;
};

export type Brand = {
  image: {
    src: string[];
    alt: string;
  };
  link?: string;
};

export type Navbar = {
  category: string;
  href: string;
  subCategory?: Array<{
    name: string;
    href: string;
  }>;
};

export type CardPolicyProps = {
  title: string;
  image: string;
  text: string;
};

export type SocialProps = {
  Icon: IconType;
  link: string;
};

export type TopBarFeaturesProps = Omit<SocialProps> & {
  title: string;
};

export type CurrencyProps = Pick<TopBarFeaturesProps, "Icon" | "title"> & {
  value: string;
};

export type FilterProps =
  | "category"
  | "brand"
  | "rating"
  | "price"
  | ""
  | "ram"
  | "processor"
  | "colors";
