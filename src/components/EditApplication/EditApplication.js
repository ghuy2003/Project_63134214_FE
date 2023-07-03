import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import useApplication from '@api/useApplication'
import FormAppInput from '@components/FormAppinput/FormAppInput'

const EditApplication = ({ID, dvName , dvFirmID, dvVersion, dvDescription, onchange}) => {
	
	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [Name, setName ] = useState(dvName)
	const [FirmID, setFirmID] = useState(dvFirmID)
	const [Version, setVersion] = useState(dvVersion)
	const [Description, setdescription] = useState(dvDescription)
	
	const { updateApp } = useApplication()
	const showModal = () => {
		setOpen(true)
	}

	const handleOk = async () => {
		const {success, data} = await updateApp({ID,Name,FirmID, Version,Description})

	
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
	

	const handleData = (ID, Name, FirmID, Version, Description) => {
		setName(Name)
		setFirmID(FirmID)
		setVersion(Version)
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
				title={t('update Firm').toCapitalize()}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText={t('update')}
				okButtonProps={{ style: { backgroundColor: 'green' } }}
				cancelButtonProps={{ type: 'primary', danger: true }}
			>
				<FormAppInput  onchangedata={handleData} ID={ID} Name={Name} FirmID={FirmID} Version={Version} Description={Description} />
			</Modal>
		</>
	)
}




export default EditApplication