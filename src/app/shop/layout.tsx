import BreadCurmb from "@/components/shared/BreadCurmb";
import SideBar from "@/components/shared/SideBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
function layout({ children }: Props) {
  return (
    <div className="container">
      <BreadCurmb />
      <div className="flex items-start gap-x-5 pt-10">
        <div className="w-[272px]">
          <SideBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default layout;
