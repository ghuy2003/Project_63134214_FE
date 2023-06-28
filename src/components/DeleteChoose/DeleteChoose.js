import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal, Space, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const { Text } = Typography

const DeleteChoose = () => {
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
				danger
				icon={<FontAwesomeIcon icon={faTrashCan} />}
				onClick={showModal}
			>
				{t('delete').toUpperFirst()}
			</Button>
			<Modal
				title={t('delete device').toCapitalize()}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={t('delete')}
				okButtonProps={{ danger: true }}
			>
				<Space direction='vertical'>
					<Text strong>{t('are you sure want to delete this device').toUpperFirst() + ' ?'}</Text>
					<Text strong>{t('this action can destroy your data').toUpperFirst() + ' !'}</Text>
				</Space>
			</Modal>
		</>
	)
}
export default DeleteChoose