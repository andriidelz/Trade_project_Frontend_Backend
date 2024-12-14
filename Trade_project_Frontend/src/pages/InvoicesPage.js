import React, { useEffect, useState } from 'react';
import { fetchInvoices, createInvoice } from '../api/invoices';

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({ type: 'outcome', date: '', total_amount: '' });

const [invoiceFilter, setInvoiceFilter] = useState('');
const filteredInvoices = invoices.filter((invoice) =>
    invoice.date.includes(invoiceFilter) || invoice.type.includes(invoiceFilter)
);

    useEffect(() => {
        fetchInvoices().then(setInvoices);
    }, []);

    const handleCreate = async () => {
        if (!newInvoice.type || !newInvoice.date || !newInvoice.total_amount) {
            alert('Please fill all fields.');
            return;
        }

        const createdInvoice = await createInvoice(newInvoice);
        setInvoices((prev) => [...prev, createdInvoice]);
    };

    return (
        <div className="container">
            <h1>Invoices</h1>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Filter invoices"
                value={invoiceFilter}
                onChange={(e) => setInvoiceFilter(e.target.value)}
            />
            <ul className="list-group mb-3">
                {filteredInvoices.map((invoice) => (
                    <li className="list-group-item" key={invoice.id}>
                        {invoice.type} - {invoice.date} - ${invoice.total_amount}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Type"
                    value={newInvoice.type}
                    onChange={(e) => setNewInvoice({ ...newInvoice, type: e.target.value })}
                />
                <input
                    type="datetime-local"
                    placeholder="Date"
                    value={newInvoice.date}
                    onChange={(e) => setNewInvoice({ ...newInvoice, date: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Total Amount"
                    value={newInvoice.total_amount}
                    onChange={(e) => setNewInvoice({ ...newInvoice, total_amount: e.target.value })}
                />
                <button onClick={handleCreate}>Create Invoice</button>
            </div>
        </div>
    );
};

export default InvoicesPage;
