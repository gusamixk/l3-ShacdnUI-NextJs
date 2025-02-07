import { use, useEffect, useState } from "react";
import { Product } from "../types/type";
import { axiosInstance } from "@/lib/axios/client";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        void(async function () {
            const fetchProducts = async () => {
                const response = await axiosInstance.get<Product[]>(`/products`);
                setProducts(response.data);
            };
            fetchProducts();
        })();

    }, []);

    return{
        products,
    }

}