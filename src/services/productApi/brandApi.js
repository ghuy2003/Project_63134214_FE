import axios from "axios";
import { PROTOCOL, HOST, PORT } from "@configs/app.config";

const apiUrl = `${PROTOCOL}://${HOST}:${PORT}/api/Branch`;

// Service để tạo mới một Branch
export const createBranch = async (branchData) => {
  try {
    const response = await axios.post(`${apiUrl}/create`, branchData);
    return response.data;
  } catch (error) {
    console.error("Error creating branch:", error);
    throw error;
  }
};

// Service để lấy danh sách tất cả các Branch
export const getAllBranches = async () => {
  try {
    const response = await axios.post(`${apiUrl}/getall`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all branches:", error);
    throw error;
  }
};

// Service để chỉnh sửa thông tin của một Branch
export const editBranch = async (branchId, branchData) => {
  try {
    const response = await axios.put(
      `${apiUrl}/Edit?id=${branchId}`,
      branchData
    );
    return response.data;
  } catch (error) {
    console.error("Error editing branch:", error);
    throw error;
  }
};

// Service để xóa một Branch
export const deleteBranch = async (branchId) => {
  try {
    const response = await axios.delete(`${apiUrl}/delete?id=${branchId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting branch:", error);
    throw error;
  }
};

// Service để xóa một Branch mềm (soft delete)
export const deleteSoftBranch = async (branchId) => {
  try {
    const response = await axios.put(`${apiUrl}/delete-soft?id=${branchId}`);
    return response.data;
  } catch (error) {
    console.error("Error soft deleting branch:", error);
    throw error;
  }
};

// Service để xóa tất cả các Branch trong danh sách đã sắp xếp
export const deleteArrangedBranches = async () => {
  try {
    const response = await axios.delete(`${apiUrl}/delete-arrange`);
    return response.data;
  } catch (error) {
    console.error("Error deleting arranged branches:", error);
    throw error;
  }
};

// Service để lấy chi tiết của một Branch bằng id
export const getBranchDetail = async (branchId) => {
  try {
    const response = await axios.get(`${apiUrl}/detail?id=${branchId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching branch detail:", error);
    throw error;
  }
};
