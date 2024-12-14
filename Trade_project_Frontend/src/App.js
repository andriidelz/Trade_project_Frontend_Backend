import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import InvoicesPage from './pages/InvoicesPage';
import ReportsPage from './pages/ReportsPage';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/invoices">Invoices</Link>
                <Link to="/reports">Reports</Link>
            </nav>
            <Routes>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/reports" element={<ReportsPage />} />
            </Routes>
        </div>
    );
};

export default App;
