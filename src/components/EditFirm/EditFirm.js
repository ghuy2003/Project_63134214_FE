import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import useFirmware from '@api/useFirmwares'
import FormFirmInput from '@components/FormFirmInput/FormFirmInput'

const EditFirm = ({ID, dvName , dvData, dvLink, dvDescription, onchange}) => {
	
	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [Name, setName ] = useState(dvName)
	const [Data, setData] = useState(dvData)
	const [LocalLink, setLocalLink] = useState(dvLink)
	const [Description, setdescription] = useState(dvDescription)
	
	const { updateFirm } = useFirmware()
	const showModal = () => {
		setOpen(true)
	}

	const handleOk = async () => {
		const {success, data} = await updateFirm({ID,Name,Data,LocalLink,Description})
		console.log(success)
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
	

	const handleData = (ID, Name, Data, LocalLink, Description) => {
		setName(Name)
		setData(Data)
		setLocalLink(LocalLink)
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
				<FormFirmInput  onchangedata={handleData} ID={ID} Name={Name} Data={Data} LocalLink={LocalLink} Description={Description} />
			</Modal>
		</>
	)
}




export default EditFirm