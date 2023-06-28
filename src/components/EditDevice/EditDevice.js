import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import FormInput from '@components/FormInput/FormInput'

const EditDevice = () => {
	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const showModal = () => {
		setOpen(true)
	}

	const handleOk = () => {
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
			<Button
				type='primary'
				icon={<FontAwesomeIcon icon={faPen} />}
				onClick={showModal}
			/>
			<Modal
				title={t('update device').toCapitalize()}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={t('update')}
				okButtonProps={{ style: { backgroundColor: 'green' } }}
				cancelButtonProps={{ type: 'primary', danger: true }}
			>
				<FormInput />
			</Modal>
		</>
	)
}




export default EditDevice