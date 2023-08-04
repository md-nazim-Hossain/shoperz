import SideBar from "@/components/shared/SideBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
function layout({ children }: Props) {
  return (
    <div className="container">
      <div className="flex items-start gap-x-5">
        <div className="w-[272px]">
          <SideBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default layout;
