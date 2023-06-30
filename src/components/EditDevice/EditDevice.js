import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import FormInput from '@components/FormInput/FormInput'
import useDevices from '@api/useDevices'

const EditDevice = ({ID, dvMac, dvName , dvApp, dvDescription, onchange}) => {
	
	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {updateDevice} = useDevices()
	const [Mac, setMac] = useState(dvMac)
	const [Name, setName ] = useState(dvName)
	const [ApplicationID, setapplication] = useState(dvApp)
	const [Description, setdescription] = useState(dvDescription)

	const showModal = () => {
		setOpen(true)
	}

	const handleOk = async () => {
		const {success, data} = await updateDevice({ID,Mac,Name,ApplicationID,Description})
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
			onchange()
		}, 1500)
	}

	const handleCancel = () => {
		setOpen(false)
	}
	

	const handleData = (ID,Mac, Name, ApplicationID, Description) => {
		setMac(Mac)
		setName(Name)
		setapplication(ApplicationID)
		setdescription(Description)
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
				<FormInput  onchangedata={handleData} ID={ID} Mac={Mac} Name={Name} ApplicationID={ApplicationID} Description={Description} />
			</Modal>
		</>
	)
}




export default EditDevice