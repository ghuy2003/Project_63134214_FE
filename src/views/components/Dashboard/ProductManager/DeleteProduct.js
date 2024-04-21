import useProduct from "@api/useProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";

function Delete(id) {


const {deleteProduct} = useProduct();
  const [modal2Open, setModal2Open] = useState(false);
 

  const handleDelete = async () => {
    const {success,data} = await deleteProduct(id)
    if(success) {
        toast.success('Delete product successfully')
    } else {
        toast.error(data.message)
    }
  }

    return ( <>
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
        <i class="fa-solid fa-trash"></i>
      </Button>

      <Modal
        width={'30%'}
        title="Delete product"
        centered
        visible={modal2Open}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <p>Do you want to delete?</p>
        <Button type="primary" size="large" color="#eb2d3a" onClick={handleDelete}>
            Delete
        </Button>
      </Modal>
    </div>
        </>
    );
}

export default  Delete;