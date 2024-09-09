import Link from "next/link";
import { ProductItemCard } from "./ProductItemCard";

export function Carousel() {
    return (
        <section className="relative w-full h-[649px] flex items-center justify-center bg-slate-200">
            <div className="absolute w-full h-[553px] flex flex-col justify-center">
                <div className="flex justify-between items-center w-full h-8 px-6 ">
                    <h3 className="text-2xl font-light leading-8 tracking-[0.2em] text-left">
                        APOSTAS DA SEMANA
                    </h3>
                    <Link href="/todos-os-produtos" className="text-xs font-normal leading-4 text-right">
                        VER TODOS OS PRODUTOS
                    </Link>
                </div>
                <div className="flex-grow flex items-center justify-start">
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                </div>
            </div>
        </section>
    )
}