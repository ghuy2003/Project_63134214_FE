import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import useProductService from "../TableDataDashboard/useProductService";
import notify from "../../../utils/notification";
import {
  ADD_ERROR,
  ADD_SUCCESS,
  DELETE_ERROR,
  DELETE_SUCCESS,
} from "../../../constants/notificationMessages";
import useBranch from "@api/useBranch";
import useProduct from "@api/useProduct";

const fakeBranches = [
  { id: 1, name: "Branch 1" },
  { id: 2, name: "Branch 2" },
  { id: 3, name: "Branch 3" },
];

const fakeProducts = [
  {
    id: 1,
    productName: "Product 1",
    productPrice: 10,
    productQuantity: 100,
    productDescription: "Description for Product 1",
    productMaterial: "Material 1",
    productType: "Type 1",
  },
  {
    id: 2,
    productName: "Product 2",
    productPrice: 20,
    productQuantity: 200,
    productDescription: "Description for Product 2",
    productMaterial: "Material 2",
    productType: "Type 2",
  },
  {
    id: 3,
    productName: "Product 3",
    productPrice: 30,
    productQuantity: 300,
    productDescription: "Description for Product 3",
    productMaterial: "Material 3",
    productType: "Type 3",
  },
  {
    id: 4,
    productName: "Product 4",
    productPrice: 40,
    productQuantity: 400,
    productDescription: "Description for Product 4",
    productMaterial: "Material 4",
    productType: "Type 4",
  },
  {
    id: 5,
    productName: "Product 5",
    productPrice: 50,
    productQuantity: 500,
    productDescription: "Description for Product 5",
    productMaterial: "Material 5",
    productType: "Type 5",
  },
];

const AddProduct = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [branchProduct, setBranch] = useState([]);
  const [form] = Form.useForm();
  const { createProduct } = useProduct();
  const { getBranch } = useBranch();
  const fetchBranch = async () => {
    const { success, data } = await getBranch({
      BranchName: "",
    });
    if (success && data.status != "Error") {
      setBranch(data.data.items);
    } else {
      notify(ADD_ERROR, "error", "bottom-right");
    }
  };
  const onFinish = async (values) => {
    try {
      // Tạo đối tượng product từ các giá trị được nhập từ form
      const product = {
        productName: values.productName,
        productPrice: values.productPrice,
        productQuantity: values.productQuantity,
        productDescription: values.productDescription,
        productMaterial: values.productMaterial,
        productType: values.productType,
      };
      const response = await createProduct(product);
      // Xử lý response từ server
      if (response.status === 201) {
        // Thêm sản phẩm thành công
        setModal2Open(false);
        notify(ADD_SUCCESS, "success", "bottom-right");
        message.success("Product created successfully!");
      } else {
        notify(ADD_ERROR, "error", "bottom-right");
        message.error(response.data.message);
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      notify(ADD_ERROR, "error", "bottom-right");
      console.error("Error creating product:", error.message);
      message.error("Failed to create product.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    fetchBranch();
  }, []);

  return (
    <div>
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
        onClick={() => setModal2Open(true)}
      >
        <PlusSquareOutlined /> ADD
      </Button>

      <Modal
        title="Create new Product"
        centered
        visible={modal2Open}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ layout: "horizontal" }}
          layout="vertical"
        >
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input placeholder="Product Name" />
          </Form.Item>
          <Form.Item
            label="Select Branch"
            name="branch"
            rules={[{ required: true, message: "Please select a branch!" }]}
          >
            <Select placeholder="Select a branch">
              {branchProduct.map((branch) => (
                <Select.Option key={branch.id} value={branch.id}>
                  {branch.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="productPrice"
            rules={[{ required: true, message: "Please input product price!" }]}
          >
            <Input placeholder="Price" type="text" />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="productQuantity"
            rules={[
              { required: true, message: "Please input product quantity!" },
            ]}
          >
            <Input placeholder="Quantity" type="text" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="productDescription"
            rules={[
              { required: true, message: "Please input product description!" },
            ]}
          >
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item
            label="Material"
            name="productMaterial"
            rules={[
              { required: true, message: "Please input product material!" },
            ]}
          >
            <Input placeholder="Material" />
          </Form.Item>
          <Form.Item
            label="Type"
            name="productType"
            rules={[{ required: true, message: "Please input product type!" }]}
          >
            <Input placeholder="Type" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
