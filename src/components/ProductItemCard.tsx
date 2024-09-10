import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface IProduct {
    name: string;
    images: {url: string}[];
    price: { formattedValue: string};
}[]

interface IProductItemCardProps {
    products: IProduct[]
}

export function ProductItemCard({products}: IProductItemCardProps) {
    
     return (
        <section className="flex flex-wrap justify-between w-full">
            {products.slice(0,5).map((product: IProduct, index) => (
                <div key={index} className="relative w-full sm:w-[48%] lg:w-[19%] h-auto mb-4">
                    <div className="relative aspect-w-3 aspect-h-4 h-[392px]">
                        <Image
                            src={product.images[0].url}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex items-center justify-center h-[48px] w-[254px] mx-auto">
                        <h3 className="text-[12px] font-[400] leading-[16px] text-left truncate flex-1">
                            {product.name}
                        </h3>
                        <h3 className="text-[12px] font-[700] leading-[16px] text-right">
                            {product.price.formattedValue}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    )
}