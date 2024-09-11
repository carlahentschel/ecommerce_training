import Link from "next/link";
import { IProduct, ProductItemCard } from "./ProductItemCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function Carousel() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products');
            setProducts(response.data);
        } catch (err) {
            console.error('Erro ao carregar os produtos');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="relative w-full h-[649px] flex items-center justify-center">
            <div className="absolute w-full h-[553px] flex flex-col justify-center">
                <div className="flex justify-between items-center w-full h-8 px-6 ">
                    <h3 className="text-2xl font-light leading-8 tracking-[0.2em] text-left">
                        APOSTAS DA SEMANA
                    </h3>
                    <Link href="/todos-os-produtos" className="text-xs font-normal leading-4 text-right underline">
                        VER TODOS OS PRODUTOS
                    </Link>
                </div>
                <div className="flex-grow flex items-center justify-start">
                    <ProductItemCard products={products} />
                </div>
            </div>
        </section>
    )
}