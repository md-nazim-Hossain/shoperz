import BreadCurmb from "@/components/shared/BreadCurmb";
import React from "react";

type Props = {
  children: React.ReactNode;
};
function ShopLayout({ children }: Props) {
  return (
    <div className="space-y-10">
      <div className="container">
        <BreadCurmb />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ShopLayout;
