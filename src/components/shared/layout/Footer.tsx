import { card, categories, contact, links, service } from "@/data/footer";
import { Footer } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="space-y-10">
      <div className="bg-gray-800 py-5">
        <div className="container text-white gap-5 flex flex-col md:flex-row justify-between items-center">
          <h4 className="text-center md:text-left">
            <span className="font-bold">Subscribe to Our Newsletter</span> - get
            a <span className="font-bold">$20 Coupon</span> for your first
            order!{" "}
          </h4>
          <div className="flex w-11/12 sm:w-[400px] bg-white rounded-[25px] overflow-hidden">
            <input
              className="w-full px-5 py-3 text-black bg-transparent border-none outline-none"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="bg-primary text-white px-5 py-3 border-none">
              <FaLocationArrow size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container pt-5 gap-x-5 gap-y-10 flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 space-y-10">
          <div className="w-[223px] h-[60px] relative mx-auto md:mx-0">
            <Image fill src={"/assets/logo/shoperz-black.svg"} alt="logo" />
          </div>
          <div className="space-y-8">
            {contact.map(
              (item: { title: string; text: string }, index: number) => {
                return (
                  <div
                    key={index}
                    className="space-y-2 text-center md:text-left"
                  >
                    <p className="font-medium">{item.title}</p>
                    <h5 className="hover:text-tertiary">{item.text}</h5>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="w-full md:flex-1 grid grid-cols-2 md:grid-cols-3 gap-5">
          <FooterLink title="Categories" data={categories} />
          <FooterLink title="Useful Links" data={links} />
          <FooterLink title="Customer Services" data={service} />
        </div>
      </div>

      <div className="border-t border-t-secondary/10">
        <div className="py-2 container flex flex-col sm:flex-row justify-between gap-5 items-center">
          <h5 className="text-secondary/60">
            &copy;<span className="font-bold">Shoperz</span> 2023 - All Rights
            Reserved
          </h5>
          <div className="flex items-center">
            {card.map((item: { src: string; alt: string }, index: number) => {
              return (
                <div key={index} className="w-[70px] h-[24px] relative">
                  <Image alt={item.src} src={item.src} fill />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const FooterLink: React.FC<{ title: string; data: Footer[] }> = ({
  data,
  title,
}) => {
  return (
    <div className="space-y-8 text-center md:text-left">
      <p className="font-medium text-tertiary">{title}</p>
      <div className="space-y-4">
        {data.map((link: Footer, index: number) => {
          return (
            <Link
              href={link.link}
              key={index}
              target={link.new_tab ? "_blank" : ""}
              className="text-secondary/70 hover:text-tertiary duration-300 text-sm block"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
