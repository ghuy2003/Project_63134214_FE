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

const columns = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Product Price",
    dataIndex: "productPrice",
    key: "prodcutPrice",
  },
  {
    title: "Product Quantity",
    dataIndex: "productQuantity",
    key: "productQuantity",
  },
  {
    title: "Product Description",
    dataIndex: "productDescription",
    key: "productDescription",
  },
  {
    title: "Product Type",
    dataIndex: "productType",
    key: "productType",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <EditProduct record={record} />
        <DeleteProduct record={record} />
      </Space>
    ),
  },
];
// const data = [
//   {
//     id: "1hudasdasdasd",
//     productName: "Áo sơ mi nam",
//     productPrice: 250000,
//     productQuantity: 50,
//     productDescription: "Áo sơ mi nam cao cấp, chất liệu cotton thoáng mát",
//     productType: "Thời trang nam",
//   },
//   {
//     id: "2",
//     productName: "Quần jean nam",
//     productPrice: 350000,
//     productQuantity: 30,
//     productDescription: "Quần jean nam cao cấp, chất liệu denim bền đẹp",
//     productType: "Thời trang nam",
//   },
//   {
//     id: "3",
//     productName: "Váy dạ hội nữ",
//     productPrice: 800000,
//     productQuantity: 20,
//     productDescription: "Váy dạ hội nữ sang trọng, phù hợp đi tiệc tối",
//     productType: "Thời trang nữ",
//   },
//   {
//     id: "4",
//     productName: "Áo khoác bomber unisex",
//     productPrice: 450000,
//     productQuantity: 40,
//     productDescription:
//       "Áo khoác bomber unisex thời trang, phù hợp cả nam và nữ",
//     productType: "Thời trang unisex",
//   },
//   {
//     id: "5",
//     productName: "Giày thể thao nam",
//     productPrice: 600000,
//     productQuantity: 25,
//     productDescription: "Giày thể thao nam chất liệu nhẹ, êm ái khi sử dụng",
//     productType: "Thể thao nam",
//   },
//   {
//     id: "6",
//     productName: "Đồng hồ nữ",
//     productPrice: 1200000,
//     productQuantity: 15,
//     productDescription: "Đồng hồ nữ cao cấp, kiểu dáng sang trọng",
//     productType: "Phụ kiện nữ",
//   },
//   {
//     id: "7",
//     productName: "Túi xách nam",
//     productPrice: 550000,
//     productQuantity: 35,
//     productDescription: "Túi xách nam da bò thật, thiết kế thời trang",
//     productType: "Phụ kiện nam",
//   },
//   {
//     id: "8",
//     productName: "Mũ len nữ",
//     productPrice: 200000,
//     productQuantity: 45,
//     productDescription: "Mũ len nữ đẹp mắt, giữ ấm cho mùa đông",
//     productType: "Phụ kiện nữ",
//   },
//   {
//     id: "9",
//     productName: "Áo len nam",
//     productPrice: 350000,
//     productQuantity: 30,
//     productDescription: "Áo len nam kiểu dáng trẻ trung, thời trang",
//     productType: "Thời trang nam",
//   },
//   {
//     id: "10",
//     productName: "Ví da nữ",
//     productPrice: 400000,
//     productQuantity: 25,
//     productDescription: "Ví da nữ chất liệu cao cấp, thiết kế đẹp mắt",
//     productType: "Phụ kiện nữ",
//   },
//   {
//     id: "11",
//     productName: "Áo khoác dù nam",
//     productPrice: 700000,
//     productQuantity: 20,
//     productDescription: "Áo khoác dù nam chống nước, phù hợp điều tiết khí hậu",
//     productType: "Thời trang nam",
//   },
//   {
//     id: "12",
//     productName: "Áo len nữ",
//     productPrice: 300000,
//     productQuantity: 35,
//     productDescription: "Áo len nữ kiểu dáng thời trang, phù hợp với mùa đông",
//     productType: "Thời trang nữ",
//   },
//   {
//     id: "13",
//     productName: "Áo khoác nỉ unisex",
//     productPrice: 400000,
//     productQuantity: 40,
//     productDescription: "Áo khoác nỉ unisex phong cách trẻ trung, dễ phối đồ",
//     productType: "Thời trang unisex",
//   },
//   {
//     id: "14",
//     productName: "Quần lửng nữ",
//     productPrice: 280000,
//     productQuantity: 30,
//     productDescription: "Quần lửng nữ kiểu dáng thoải mái, phù hợp với mùa hè",
//     productType: "Thời trang nữ",
//   },
//   {
//     id: "15",
//     productName: "Áo khoác da nam",
//     productPrice: 900000,
//     productQuantity: 25,
//     productDescription: "Áo khoác da nam chất liệu da thật, bền đẹp",
//     productType: "Thời trang nam",
//   },
// ];
const TableDataDashboard = () => {
  const { data, loading, error, getAllProducts } = useProductService();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <AddProduct />
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default TableDataDashboard;
