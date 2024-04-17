import axios from "axios";

const apiUrl = "http://localhost:3000/api/product";

export const getAllProductsApi = async () => {
  const getAllUrl = `${apiUrl}/getall`;
  return axios.get(getAllUrl);
};

export const addProductApi = async (newProduct) => {
  return axios.post(apiUrl, newProduct);
};

export const updateProductApi = async (productId, updatedProduct) => {
  const updateUrl = `${apiUrl}/${productId}`;
  return axios.put(updateUrl, updatedProduct);
};

export const deleteProductApi = async (productId) => {
  const deleteUrl = `${apiUrl}/${productId}`;
  return axios.delete(deleteUrl);
};
