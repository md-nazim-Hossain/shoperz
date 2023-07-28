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
  subCategory?: string;
  brand: string;
  description: string[];
  color: string[];
  model: string;
  id: string;
  sold: number;
  totalReview: number;
  rating: number;
  slug: string;
};

export type Brand = {
  image: {
    src: string;
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
