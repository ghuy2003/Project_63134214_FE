import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import useProductService from "./useProductService";
import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Product Price",
    dataIndex: "prodcutPrice",
    key: "prodcutPrice",
  },
  {
    title: "Product Quantity",
    dataIndex: "productQuanlity",
    key: "productQuanlity",
  },
  {
    title: "Product Description",
    dataIndex: "productDescription",
    key: "productDescription",
  },
  {
    title: "productType",
    dataIndex: "productType",
    key: "productType",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          icon={<EditOutlined />}
          type={"primary"}
          onClick={() => {
            // setInitialData(contact);
            // setModalVisible(true);

            console.log("click!");
          }}
          ghost
        />
        <Button
          icon={<DeleteOutlined />}
          type={"primary"}
          onClick={() => {
            console.log("click!");
          }}
          danger
          ghost
        />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1hudasdasdasd",
    productName: "Áo sơ mi nam",
    prodcutPrice: 250000,
    productQuanlity: 50,
    productDescription: "Áo sơ mi nam cao cấp, chất liệu cotton thoáng mát",
    productType: "Thời trang nam",
  },
  {
    key: "2",
    productName: "Quần jean nam",
    prodcutPrice: 350000,
    productQuanlity: 30,
    productDescription: "Quần jean nam cao cấp, chất liệu denim bền đẹp",
    productType: "Thời trang nam",
  },
  {
    key: "3",
    productName: "Váy dạ hội nữ",
    prodcutPrice: 800000,
    productQuanlity: 20,
    productDescription: "Váy dạ hội nữ sang trọng, phù hợp đi tiệc tối",
    productType: "Thời trang nữ",
  },
  {
    key: "4",
    productName: "Áo khoác bomber unisex",
    prodcutPrice: 450000,
    productQuanlity: 40,
    productDescription:
      "Áo khoác bomber unisex thời trang, phù hợp cả nam và nữ",
    productType: "Thời trang unisex",
  },
  {
    key: "5",
    productName: "Giày thể thao nam",
    prodcutPrice: 600000,
    productQuanlity: 25,
    productDescription: "Giày thể thao nam chất liệu nhẹ, êm ái khi sử dụng",
    productType: "Thể thao nam",
  },
  {
    key: "6",
    productName: "Đồng hồ nữ",
    prodcutPrice: 1200000,
    productQuanlity: 15,
    productDescription: "Đồng hồ nữ cao cấp, kiểu dáng sang trọng",
    productType: "Phụ kiện nữ",
  },
  {
    key: "7",
    productName: "Túi xách nam",
    prodcutPrice: 550000,
    productQuanlity: 35,
    productDescription: "Túi xách nam da bò thật, thiết kế thời trang",
    productType: "Phụ kiện nam",
  },
  {
    key: "8",
    productName: "Mũ len nữ",
    prodcutPrice: 200000,
    productQuanlity: 45,
    productDescription: "Mũ len nữ đẹp mắt, giữ ấm cho mùa đông",
    productType: "Phụ kiện nữ",
  },
  {
    key: "9",
    productName: "Áo len nam",
    prodcutPrice: 350000,
    productQuanlity: 30,
    productDescription: "Áo len nam kiểu dáng trẻ trung, thời trang",
    productType: "Thời trang nam",
  },
  {
    key: "10",
    productName: "Ví da nữ",
    prodcutPrice: 400000,
    productQuanlity: 25,
    productDescription: "Ví da nữ chất liệu cao cấp, thiết kế đẹp mắt",
    productType: "Phụ kiện nữ",
  },
  {
    key: "11",
    productName: "Áo khoác dù nam",
    prodcutPrice: 700000,
    productQuanlity: 20,
    productDescription: "Áo khoác dù nam chống nước, phù hợp điều tiết khí hậu",
    productType: "Thời trang nam",
  },
  {
    key: "12",
    productName: "Áo len nữ",
    prodcutPrice: 300000,
    productQuanlity: 35,
    productDescription: "Áo len nữ kiểu dáng thời trang, phù hợp với mùa đông",
    productType: "Thời trang nữ",
  },
  {
    key: "13",
    productName: "Áo khoác nỉ unisex",
    prodcutPrice: 400000,
    productQuanlity: 40,
    productDescription: "Áo khoác nỉ unisex phong cách trẻ trung, dễ phối đồ",
    productType: "Thời trang unisex",
  },
  {
    key: "14",
    productName: "Quần lửng nữ",
    prodcutPrice: 280000,
    productQuanlity: 30,
    productDescription: "Quần lửng nữ kiểu dáng thoải mái, phù hợp với mùa hè",
    productType: "Thời trang nữ",
  },
  {
    key: "15",
    productName: "Áo khoác da nam",
    prodcutPrice: 900000,
    productQuanlity: 25,
    productDescription: "Áo khoác da nam chất liệu da thật, bền đẹp",
    productType: "Thời trang nam",
  },
];
const TableDataDashboard = () => {
  // const { data, loading, error, getAllProducts } = useProductService();

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  return (
    <>
      <Button
        type="primary"
        value="large"
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          background: "#1fbf39",
          marginBottom: "20px",
        }}
      >
        <PlusSquareOutlined /> ADD
      </Button>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default TableDataDashboard;
