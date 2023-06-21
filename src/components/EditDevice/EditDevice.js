import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Adminacction from '@components/Adminacction/Adminacction';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './EditDevice.module.scss'
const cx = classNames.bind(Styles)
const EditDevice = () => {
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
            <div className={cx('edit__btn')} onClick={showModal}>
                <Adminacction titlephara={'Edit'} children={<FontAwesomeIcon icon={faSquarePen} style={{color: "rgb(221 221 38 / 72%)", fontSize: '1.3rem'}}/> } />
            </div>
            <Modal
                okButtonProps={{style: {backgroundColor: '#8938DE'}}}
                title="Device Information"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Update"
            >
                
            </Modal>
    </>
  );
};
export default EditDevice;