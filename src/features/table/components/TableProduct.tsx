"use client"
import React, { useState } from 'react';
import { DashboardTableHead } from './TableHead';
import { Product } from '../types/type';
import { useProducts } from '../api/useProduct';
import { Button } from '@/components/ui/button';

export const TableProduct = () => {
    const { products} = useProducts();

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Product Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <DashboardTableHead/>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                                        {product.title}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                        ${product.price}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                        {product.description}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                        {product.category}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded-full" />
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                        {product.rating.rate}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                        {product.rating.count}
                                    </p>
                                </td>
                                <td className="py-3 px-5 border-b border-blue-gray-50">
                                    <Button>Detail</Button>
                                    <Button>Edit</Button>
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