import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, message } from "antd";
import React, { useState, useEffect } from "react";
import useProductService from "../TableDataDashboard/useProductService";
import notify from "../../../utils/notification";
import {
  EDIT_ERROR,
  EDIT_SUCCESS,
} from "../../../constants/notificationMessages";

const EditProduct = ({ record }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { updateProduct } = useProductService();
  console.log(record);
  // Fill form with record data when modal is opened
  useEffect(() => {
    if (record) {
      const {
        productName,
        productPrice,
        productQuantity,
        productDescription,
        productMaterial,
        productType,
      } = record;
      form.setFieldsValue({
        productName,
        productPrice,
        productQuantity,
        productDescription,
        productType,
      });
    }
  }, [record, form]);

  const handleEdit = async () => {
    try {
      const values = await form.validateFields();
      const updatedProduct = {
        ...record,
        productName: values.productName,
        productPrice: values.productPrice,
        productQuantity: values.productQuantity,
        productDescription: values.productDescription,
        productType: values.productType,
      };

      console.log(updateProduct);
      const response = await updateProduct(record.id, updatedProduct);

      if (response.status === 200) {
        notify(EDIT_SUCCESS, "info", "bottom-right");
        message.success("Product updated successfully!");
        setModalOpen(false);
      } else {
        message.error(response.data.message);
        notify(EDIT_ERROR, "error", "bottom-right");
      }
    } catch (error) {
      notify(EDIT_ERROR, "error", "bottom-right");
      console.error("Error editing product:", error.message);
      message.error("Failed to edit product.");
    }
  };

  return (
    <div>
      <Button
        icon={<EditOutlined />}
        type="primary"
        onClick={() => setModalOpen(true)}
        ghost
      />

      <Modal
        title="Edit Product"
        centered
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleEdit}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="productPrice"
            rules={[{ required: true, message: "Please input product price!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="productQuantity"
            rules={[
              { required: true, message: "Please input product quantity!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="productDescription"
            rules={[
              { required: true, message: "Please input product description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Type"
            name="productType"
            rules={[{ required: true, message: "Please input product type!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditProduct;
