import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './DeleteChoose.module.scss'
import FormInput from '@components/FormInput/FormInput';
const cx = classNames.bind(Styles)
const DeleteChoose = () => {
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
                    <Button type="primary" style={{borderRadius: '20px', backgroundColor: "rgba(211, 10, 10, 0.78)"}}>
                        <FontAwesomeIcon icon={faCircleMinus} style={{marginRight: '5px'}} />
                        Delete
                    </Button>
            </div>
            <Modal
                title="Delete Device"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Delete"
                className='delete__form'
                okButtonProps={{ style: { backgroundColor: 'rgb(255, 37, 37)', } }} 
            >
                <p className={cx('delete__title')}>Are you sure want to delete this device ?</p>

                <p className={cx('delete__sub-title')}>This action can destroy your data!</p>
            </Modal>
    </>
  );
};
export default DeleteChoose;