"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import Reviews from "./Reviews";

type Props = {
  product: Product;
};
function AboutProduct({ product }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white">
      <div className="container">
        <div className="border border-b-0 rounded-md rounded-bl-none rounded-br-none w-max">
          {["Description", "Specifications", "Reviews"].map(
            (item: string, index: number) => {
              return (
                <Button
                  disabled={index === active}
                  key={index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "relative px-5 py-2 border-r last:border-r-0 rounded-none disabled:opacity-100 bg-white hover:bg-secondary/20",
                    index === 0 && "rounded-tl-md",
                    index === 2 && "rounded-tr-md"
                  )}
                >
                  <span className="relative z-20">{item}</span>
                  {active === index ? (
                    <motion.span
                      layoutId="description-tabs"
                      className={cn(
                        "inset-0 absolute top-0 right-0 w-full h-[101%] bg-white",
                        index === 0 && "rounded-tl-md",
                        index === 2 && "rounded-tr-md"
                      )}
                    ></motion.span>
                  ) : null}
                </Button>
              );
            }
          )}
        </div>
        <div className="border rounded-md rounded-tl-none pb-10 px-5">
          {active === 0 && <ProductDescription />}
          {active === 1 && <ProductSpecification />}
          {active === 2 && <Reviews product={product} />}
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
