import { useAppSelector } from "@/redux/Store";
import { numberFormat } from "@/utils/format-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { CiShuffle } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { SheetContainer } from "../SheetContainer";

function NavSearchBar() {
    const { wishListProduct, compareListProduct } = useAppSelector(
        state => state.toggleAddProductList
    );
    return (
        <div className="container">
            <div className="py-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-5">
                        <FiMenu size={20} />
                        <Link
                            href={"/"}
                            className="w-[148px] h-[40px] relative mx-auto md:mx-0"
                        >
                            <Image
                                fill
                                src={"/assets/logo/shoperz-black.svg"}
                                alt="logo"
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-secondary pr-10">
                    <HiUser size={20} />

                    <SheetContainer
                        title="Compare List Products"
                        type="comparelist"
                        products={compareListProduct}
                        trigger={
                            <button className="relative">
                                <h6 className="absolute z-20 -top-2.5 -right-2">
                                    {numberFormat(
                                        compareListProduct.length.toString()
                                    )}
                                </h6>
                                <CiShuffle size={20} />
                            </button>
                        }
                    />
                    <SheetContainer
                        title="Wish List Products"
                        type="wishlist"
                        products={wishListProduct}
                        trigger={
                            <button className="relative">
                                <h6 className="absolute z-20 -top-2.5 -right-2">
                                    {numberFormat(
                                        wishListProduct.length.toString()
                                    )}
                                </h6>
                                <BiSolidHeart size={20} />
                            </button>
                        }
                    />

                    <div className="flex items-center gap-1">
                        <HiShoppingBag size={20} />
                        <h5>$0.00</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavSearchBar;
