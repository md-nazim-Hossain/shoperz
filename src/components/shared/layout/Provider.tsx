"use client";
import store from "@/services/redux/Store";
import React from "react";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
