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
  brand: string;
  description: string[];
  color: string[];
  model: string;
  id: string;
  sold: number;
  totalReview: number;
  rating: number;
};

export type Brand = {
  image: {
    src: string;
    alt: string;
  };
  link?: string;
};
