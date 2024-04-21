import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import useProductService from "../TableDataDashboard/useProductService";
import notify from "../../../utils/notification";
import {
  ADD_ERROR,
  ADD_SUCCESS,
  DELETE_ERROR,
  DELETE_SUCCESS,
} from "../../../constants/notificationMessages";

import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import useBranch from "@api/useBranch";
import useOrigin from "@api/useOrigin";
const getBase64 = (file) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const AddProduct = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const { addProduct } = useProductService();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');


  const {getAllBranch} = useBranch()
  const {getAllOrigin} = useOrigin()
  // const {getAllOrigin} = useOrigin()
  const [branch, setBranch] = useState([])
  const [origin, setOrigin] = useState([])



  const fetchbranch = async () => {
    const {success, data} = await getAllBranch();

    if(data != null && success) {
      var databranch = data.data.map((items) => {
        return {
          value: items.id,
          label: items.branchName
        }
      });
      setBranch(databranch)
    }
  }


  const fetchOrigin = async () => {
    const { success,data} = await getAllOrigin();
    if(data != null && success) {
      var dataOrigin = data.data.map((items) => {
        return {
          value: items.id,
          label: items.originName
        }
      });
      setOrigin(dataOrigin)
    }
  }
  



  useEffect(() => {
    fetchbranch()
    fetchOrigin()
  }, [])
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChangeFile = ({ fileList: newFileList }) => {
    setFileList(newFileList)

    console.log(newFileList);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  

  const onFinish = async (values) => {

    console.log(fileList);
    try {
      // Tạo đối tượng product từ các giá trị được nhập từ form
      const product = {
        branchId: values.branchId,
        categoryId: values.categoryId,
        originId: values.originId,
        productName: values.productName,
        productPrice: values.productPrice,
        productQuantity: values.productQuantity,
        productDescription: values.productDescription,
        productMaterial: values.productMaterial,
        comment: values.comment,
        rate: values.rate,
        productType: values.productType,
        productSold: values.productSold,
        listFileImg: fileList.reduce((img) => {
          return img.originFileObj
        }),
      };

      console.log(product);
      const response = await addProduct(product);

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


  const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

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
        width={'60%'}
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
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Please input product name!" }]}
              >
                <Input placeholder="Product Name" />
              </Form.Item>
            </Col>


            <Col span={8}>
              <Form.Item
                label="Branch"
                name="branchId"
                rules={[{ required: true, message: "Please input Branch!" }]}
              >
                <Select
                  placeholder="Please select"
                  onChange={handleChange}
                  style={{
                    width: '100%'
                  }}
                  options={branch}
                  />
              </Form.Item>
             

          </Col>
         
          <Col span={8}>
            <Form.Item
              label="Origin"
              name="originId"
              rules={[{ required: true, message: "Please input Origin" }]}
            >
              <Select
                placeholder="Please select"
                onChange={handleChange}
                style={{
                  width: '100%',
                }}
                options={origin}
              />

            </Form.Item>
          </Col>
          
          <Col span={8}>
            <Form.Item
              label="Price"
              name="productPrice"
              rules={[{ required: true, message: "Please input product price!" }]}
            >
              <Input placeholder="Price" type="text" />
            </Form.Item>
          </Col>
         
          <Col span={8}>
            <Form.Item
              label="Quantity"
              name="productQuantity"
              rules={[
                { required: true, message: "Please input product quantity!"},
              ]}
            >
              <Input placeholder="Quantity" type="text" />
            </Form.Item>
          </Col>
          
          <Col span={8}>
            <Form.Item
              label="Description"
              name="productDescription"
              rules={[
                { required: true, message: "Please input product description!" },
              ]}
            >
              <Input.TextArea placeholder="Description" />
            </Form.Item>
          
          </Col>
          
          <Col span={8}>
          
            <Form.Item
              label="Material"
              name="productMaterial"
              rules={[
                { required: true, message: "Please input product material!" },
              ]}
            >
              <Input placeholder="Material" />
            </Form.Item>

          </Col>
          
          
          
         
          
         
         
          <Col span={8}>
            <Form.Item
              label="Type"
              name="productType"
              rules={[{ required: true, message: "Please input product type!" }]}
            >
              <Input placeholder="Type" />
            </Form.Item>
          </Col>
         
          
          
          <Col span={8}>
            <Form.Item
              label="List File Image"
              name="listFileImg"
              getValueFromEvent={e => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }}
              rules={[
                { required: true, message: "Please input list file image!" },
              ]}
            >
              <>
      <Upload
        action={""}
        listType="picture-card"
        name="listFileImg"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChangeFile}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
</>
            </Form.Item>
          </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
