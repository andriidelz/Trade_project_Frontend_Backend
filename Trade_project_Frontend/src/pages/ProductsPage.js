import React, { useEffect, useState } from 'react';
import { fetchProducts, createProduct } from '../api/products';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', unit_price: '', description: '' });

const [filter, setFilter] = useState('');
const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.unit_price.toString().includes(filter)
);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    const handleCreate = async () => {
        if (!newProduct.name || !newProduct.unit_price || !newProduct.description) {
            alert('Please fill all fields.');
            return;
        }

        const created = await createProduct(newProduct);
        setProducts((prev) => [...prev, created]);
    };

    return (
        <div className="container">
            <h1>Products</h1>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Filter products"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="list-group mb-3">
                {filteredProducts.map((product) => (
                    <li className="list-group-item" key={product.id}>
                        {product.name} - ${product.unit_price}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    className="form-control mb-2"
                    type="number"
                    placeholder="Price"
                    value={newProduct.unit_price}
                    onChange={(e) => setNewProduct({ ...newProduct, unit_price: e.target.value })}
                />
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <button className="btn btn-primary" onClick={handleCreate}>Add Product</button>
            </div>
        </div>
    );
};

export default ProductsPage;
