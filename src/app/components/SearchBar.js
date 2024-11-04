"use client";

import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <input
                type={"text"}
                placeholder={"Search products..."}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.slice(0, 20).map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchBar;