import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal, Space, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useDevices from '@api/useDevices'

const { Text } = Typography

const DeleteDevice = ({ID, onchange}) => {
	const t = useTranslate()
	const { deleteDevice } = useDevices()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const showModal = () => {
		setOpen(true)
		console.log(
			onchange
		)

	}

	const handleOk = async () => {
		const {success} = await deleteDevice({ID})
		if(success) {
			setConfirmLoading(true)
			setTimeout(() => {
				setOpen(false)
				setConfirmLoading(false)
				onchange()
			}, 2000)
		}
	}

	const handleCancel = () => {
		console.log('Clicked cancel button')
		setOpen(false)
	}

	return (
		<>
			<Button
				type='primary'
				danger
				icon={<FontAwesomeIcon icon={faTrashCan} />}
				onClick={showModal}
			/>
			<Modal
				title={t('delete sevice').toCapitalize()}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={t('delete')}
				cancelText={t('cancel')}
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
export default DeleteDevice