import axiosInstance from './axiosInstance';

export const fetchSalesReport = async (startDate, endDate) => {
    const response = await axiosInstance.get('/reports/sales', {
        params: { start_date: startDate, end_date: endDate },
    });
    return response.data;
};

export const fetchProfitReport = async (startDate, endDate) => {
    const response = await axiosInstance.get('/reports/profits', {
        params: { start_date: startDate, end_date: endDate },
    });
    return response.data;
};

export const fetchInventoryReport = async (date) => {
    const response = await axiosInstance.get('/reports/inventory', {
        params: { date },
    });
    return response.data;
};
