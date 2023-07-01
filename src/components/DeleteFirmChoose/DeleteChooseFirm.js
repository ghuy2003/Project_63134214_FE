import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal, Space, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import useFirmware from '@api/useFirmwares'
const { Text } = Typography

const DeleteChooseFirm = ({onchange, disable, selectedRowKeys}) => {
	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const { deleteManyFirms } = useFirmware()

	const showModal = () => {
		setOpen(true)
	}

	

	const handleOk = async () => {
		const {success,data} = await deleteManyFirms({selectedRowKeys})

		console.log(success)
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
		setOpen(false)
	}

	return (
		<>
			<Button
				type='primary'
				danger
				icon={<FontAwesomeIcon icon={faTrashCan} />}
				onClick={showModal}
				disabled={disable}
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
export default DeleteChooseFirm