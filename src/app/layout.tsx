import Brand from "@/components/shared/Brand";
import Footer from "@/components/shared/layout/Footer";
import Navbar from "@/components/shared/layout/Navbar";
import Providers from "@/components/shared/layout/Provider";
import { ThemeProvider } from "@/components/shared/layout/ThemeProvider";
import TopBar from "@/components/shared/layout/TopBar";
import TopProducts from "@/components/shared/layout/TopProducts";
import { Toaster } from "@/components/ui/toaster";
import { roboto } from "@/lib/font";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Shoperz - Home",
  description: "Generated by create next app",
  icons: {
    icon: "/assets/logo/shoperz-white.svg",
    shortcut: "/assets/logo/shoperz-white.svg",
    apple: "/assets/logo/shoperz-white.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Providers>
            <Toaster />
            <TopBar />
            <Navbar />
            {children}
            <div className="space-y-10 mt-10">
              <Brand />
              <TopProducts />
            </div>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
