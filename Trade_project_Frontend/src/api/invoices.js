import axiosInstance from './axiosInstance';

export const fetchInvoices = async () => {
    const response = await axiosInstance.get('/invoices/');
    return response.data;
};

export const createInvoice = async (invoice) => {
    const response = await axiosInstance.post('/invoices/', invoice);
    return response.data;
};
