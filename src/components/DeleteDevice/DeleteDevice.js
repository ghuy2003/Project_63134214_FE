import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Adminacction from '@components/Adminacction/Adminacction';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './DeleteDevice.module.scss'
const cx = classNames.bind(Styles)
const DeleteDevice = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
    setOpen(true);
    };
    const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
    }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
    setOpen(false);
    };
  return (
    <>
            <div className={cx('delete__btn')} onClick={showModal}>
                <Adminacction titlephara={'Delete'} children={<FontAwesomeIcon icon={faTrash} style={{color: '#d30a0ac7', fontSize: "1.3rem"}} />} />
            </div>
            <Modal
                title="Delete Device"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Delete"
                okButtonProps={{ style: { backgroundColor: 'rgb(255, 37, 37)', } }} 
            >
                <h3>Are you want to delete this device?</h3>
            </Modal>
    </>
  );
};
export default DeleteDevice;