import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormInput from '@components/FormInput/FormInput'

const AddDevice = () => {
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
		setOpen(false)
	}

	return (
		<>
			<Button
				type='primary'
				style={{ background: 'green' }}
				onClick={showModal}
				icon={<FontAwesomeIcon icon={faPlus} color='white' />}
			>
				{t('add device').toUpperFirst()}
			</Button>
			<Modal
				title={t('add device').toCapitalize()}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={t('confirm')}
				cancelText={t('cancel')}
				okButtonProps={{ style: { backgroundColor: 'green' } }}
				cancelButtonProps={{ type: 'primary', danger: true }}
			>
				<FormInput />
			</Modal>
		</>
	)
}
export default AddDevice