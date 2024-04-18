import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import useProductService from "./useProductService";
import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import AddProduct from "../addProductDashboard/AddProduct";
import DeleteProduct from "../deleteProductDasboard/DeleteProduct";
import EditProduct from "../edirProductDashboard/EditProduct";


const TableDataDashboard = () => {
  const { data, loading, error, getAllProducts } = useProductService();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <AddProduct />
    </>
  );
};

export default TableDataDashboard;
