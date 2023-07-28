import { Navbar } from "@/types";

export const navData: Navbar[] = [
  {
    category: "Tv & Audio",
    href: "/shop/tv-audio",
    subCategory: [
      {
        name: "Headphones",
        href: "/shop/smartphones/headphones",
      },
    ],
  },
  {
    category: "Smartphones",
    href: "/shop/smartphones",
    subCategory: [
      {
        name: "Telephone",
        href: "/shop/smartphones/telephone",
      },
      {
        name: "Headphones",
        href: "/shop/smartphones/headphones",
      },
    ],
  },
  {
    category: "Laptop & PCs",
    href: "/shop/laptop-pc",
    subCategory: [
      {
        name: "Laptop",
        href: "/shop/laptop-pc/laptop",
      },
      {
        name: "PC",
        href: "/shop/laptop-pc/pc",
      },
    ],
  },
  {
    category: "Photo & Video",
    href: "/shop/photo-video",
    subCategory: [
      {
        name: "Camera",
        href: "/shop/photo-video/camera",
      },
    ],
  },
  {
    category: "Gadgets",
    href: "/shop/gadgets",
    subCategory: [
      {
        name: "Smartwatch",
        href: "/shop/gadgets/smartwatch",
      },
    ],
  },
  {
    category: "Books",
    href: "/shop/books",
    subCategory: [],
  },

  {
    category: "Toys",
    href: "/shop/toys",
    subCategory: [],
  },
];
