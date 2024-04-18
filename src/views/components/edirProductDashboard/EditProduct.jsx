import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

const EditProduct = ({ record }) => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <Button
        icon={<EditOutlined />}
        type={"primary"}
        onClick={() => {
          setModal2Open(true);

          console.log(record);

          console.log("click!");
        }}
        ghost
      />

      <Modal
        title="Create new Product"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default EditProduct;
