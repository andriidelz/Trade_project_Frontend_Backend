import axiosInstance from './axiosInstance';

export const fetchProducts = async () => {
    const response = await axiosInstance.get('/products/');
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axiosInstance.post('/products/', product);
    return response.data;
};
