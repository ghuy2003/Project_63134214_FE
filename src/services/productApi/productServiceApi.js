import axios from "axios";

const apiUrl = "http://localhost:3000/api/Product";

export const getAllProductsApi = async () => {
  const getAllUrl = `${apiUrl}/getall`;
  return axios.get(getAllUrl);
};

export const addProductApi = async (newProduct) => {
  const getAllUrl = `${apiUrl}/create`;
  return axios.post(getAllUrl, newProduct);
};

export const updateProductApi = async (productId, updatedProduct) => {
  const updateUrl = `${apiUrl}/Edit/${productId}`;
  return axios.put(updateUrl, updatedProduct);
};

export const deleteProductApi = async (productId) => {
  const deleteUrl = `${apiUrl}/delete/${productId}`;
  return axios.delete(deleteUrl);
};
