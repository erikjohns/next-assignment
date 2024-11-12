"use client";

import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>Shop</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                    padding: '8px',
                    marginBottom: '16px',
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
            }}>
                {filteredProducts.slice(0, 20).map(product => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}
                        />
                        <h3 style={{ fontSize: '1rem', margin: '12px 0' }}>{product.title}</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;