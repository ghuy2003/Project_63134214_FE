import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import FormFirm from '@components/FormFirm/FormFirm'
import Adminacction from '@components/Adminacction/Adminacction'
import { useState } from 'react'
import classNames from 'classnames/bind'
import Styles from './EditNameFile.module.scss'
import React from 'react'
const cx = classNames.bind(Styles)
const EditName = () => {
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [modalText, setModalText] = useState('Content of the modal')
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
		}, 2000)
	}
	const handleCancel = () => {
		console.log('Clicked cancel button')
		setOpen(false)
	}
	return (
		<>
			<div className={cx('edit__btn')} onClick={showModal}>
				<Adminacction titlephara={'Edit FileName'} children={<FontAwesomeIcon icon={faPenToSquare} style={{color: 'rgb(29 114 245)', fontSize: '1.3rem'}}/> } />
			</div>
			<Modal
				title='Update FirmWare'
				okButtonProps={{style: {backgroundColor: '#8938DE'}}}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Update'
				className='edit--name__form'
			>
				<FormFirm />
			</Modal>
		</>
	)
}




export default EditName