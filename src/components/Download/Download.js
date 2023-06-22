import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Adminacction from '@components/Adminacction/Adminacction';
import { useState } from 'react';
import FormInput from '@components/FormInput/FormInput';
import classNames from 'classnames/bind';
import Styles from './Download.module.scss'
const cx = classNames.bind(Styles)
const Download = () => {
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
                <Adminacction titlephara={'Download'} children={<FontAwesomeIcon icon={faDownload} style={{color: "rgb(2 13 30)", fontSize: '1.3rem'}}/> } />
            </div>
            <Modal
                okButtonProps={{style: {backgroundColor: '#8938DE'}}}
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Update"
                className='edit__form'
            >
                <p className={cx('form__title')}>Update Device</p>
                <FormInput />
            </Modal>
    </>
  );
};




export default Download;