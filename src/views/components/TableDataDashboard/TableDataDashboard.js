import React, { useEffect, useState } from "react";
import { Button, Divider, Space, Spin, Table, Tag } from "antd";
import useProductService from "./useProductService";
import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import AddProduct from "../addProductDashboard/AddProduct";
import DeleteProduct from "../deleteProductDasboard/DeleteProduct";
import EditProduct from "../edirProductDashboard/EditProduct";
import { datas, brands, originData } from "./fakedata";
import columns from "./columns";
import useBranch from "@api/useBranch";
import { toast } from "react-toastify";
import useOrigin from "@api/useOrigin";

// const columns = [
//   {
//     title: "Branch",
//     dataIndex: "brandName",
//     key: "branchId",
//   },
//   {
//     title: "Category",
//     dataIndex: "CategoryId",
//     key: "categoryId",
//   },
//   {
//     title: "Origin",
//     dataIndex: "originName",
//     key: "originId",
//   },
//   {
//     title: "Name",
//     dataIndex: "ProductName",
//     key: "productName",
//   },
//   {
//     title: "Price",
//     dataIndex: "ProductPrice",
//     key: "productPrice",
//   },
//   {
//     title: "Quantity",
//     dataIndex: "ProductQuantity",
//     key: "productQuantity",
//   },
//   {
//     title: "Description",
//     dataIndex: "ProductDescription",
//     key: "productDescription",
//   },
//   {
//     title: "Material",
//     dataIndex: "ProductMaterial",
//     key: "productMaterial",
//   },
//   {
//     title: "Views",
//     dataIndex: "Views",
//     key: "views",
//   },

//   {
//     title: "Rate",
//     dataIndex: "Rate",
//     key: "rate",
//   },
//   {
//     title: "Type",
//     dataIndex: "ProductType",
//     key: "productType",
//   },

//   {
//     title: "Img",
//     dataIndex: "ListFileImg",
//     key: "listFileImg",
//     render: (listFileImg) => (
//       <ul>
//         {listFileImg.map((file, index) => (
//           <li key={index}>{file}</li>
//         ))}
//       </ul>
//     ),
//   },
// ];

const TableDataDashboard = () => {
  const [branchProduct, setBranch] = useState([]);
  const [originProduct, setOrigin] = useState([]);
  const { getBranch } = useBranch();
  const { getOrigin } = useOrigin();
  const { data, loading, error, getAllProducts } = useProductService();
  const fetchBranch = async () => {
    const { success, data } = await getBranch({
      BranchName: "",
    });
    if (success && data.status != "Error") {
      setBranch(data.data.items);
    } else {
      toast.error(data.message);
    }
  };
  useEffect(() => {
    fetchBranch();
    getAllProducts();
  }, []);
  const fetchOrigin = async () => {
    const { success, data } = await getOrigin({
      OriginName: "",
    });
    if (success && data.status != "Error") {
      setBranch(data.data.items);
    } else {
      toast.error(data.message);
    }
  };
  useEffect(() => {
    fetchOrigin();
    fetchBranch();
    getAllProducts();
  }, []);

  const brandMap = branchProduct.reduce((acc, brand) => {
    acc[brand.id] = brand.name;
    return acc;
  }, {});

  // Tạo một đối tượng mapping origin id với tên origin
  const originMap = originProduct.reduce((acc, origin) => {
    acc[origin.id] = origin.name;
    return acc;
  }, {});

  // Cập nhật dữ liệu sản phẩm với tên brand và tên origin
  const dataSource = data?.map((product) => ({
    ...product,
    brandName: brandMap[product.BranchId],
    originName: originMap[product.OriginId],
  }));

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <div>
          <AddProduct />
          <Table columns={columns} dataSource={dataSource} />
        </div>
      )}
    </>
  );
};

export default TableDataDashboard;
