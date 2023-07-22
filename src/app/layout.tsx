import { roboto } from "@/libs/font";
import "../styles/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/shared/layout/Footer";
import Brand from "@/components/shared/Brand";

export const metadata: Metadata = {
  title: "Shoperz - Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo/shoperz-white.svg" />
      </head>
      <body className={roboto.className}>
        {children}
        <div className="space-y-10 mt-10">
          <Brand />
          <Footer />
        </div>
      </body>
    </html>
  );
}
