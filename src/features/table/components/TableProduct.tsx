"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type TableProductProps = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export const TableProduct = (props : TableProductProps) => {
    const [products, setProducts] = useState<TableProductProps[]>([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

 

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Product Table</h1>
    <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">
                            ${product.price}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                        <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">{product.description}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded-md" />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition">Detail</button>
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    );
};

export default TableProduct;