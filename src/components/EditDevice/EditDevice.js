import React, { useState } from 'react'
import useTranslate from '@lang'

import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import FormInput from '@components/FormInput/FormInput'
import useDevices from '@api/useDevices'

const EditDevice = ({ID, dvMac, dvLocalIp, dvName , dvApp, 	dvODO , dvDescription,dvStatus, onchange}) => {


	const t = useTranslate()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {updateDevice} = useDevices()
	const [Mac, setMac] = useState(dvMac)
	const [LocalIp, setLocalp] = useState(dvLocalIp)
	const [Name, setName ] = useState(dvName)
	const [ApplicationID, setapplication] = useState(dvApp)
	const [ODO, setODO] = useState(dvODO)
	const [Description, setdescription] = useState(dvDescription)
	const [StatusID, setStatusID] = useState(dvStatus)
	const  [status, setStatus] = useState(false)


	const showModal = () => {
		setOpen(true)
	}

	const handleOk = async () => {
		const {success, data} = await updateDevice({ID,Mac,LocalIp,Name,ApplicationID, ODO,Description,StatusID })
		if(success) {
			setConfirmLoading(true)
			setTimeout(() => {
				setOpen(false)
				setConfirmLoading(false)
				onchange()
				handleReset()
			}, 1500)
		}
	}

	const handleCancel = () => {
		setOpen(false)
	}													
	const handleReset = () =>  {
		setStatus(true)
	}
	const handleResetStatus = () => {
		setStatus(false)
	}
	const handleData = (ID,Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID) => {
		setMac(Mac)
		setLocalp(LocalIp)
		setName(Name)
		setapplication(ApplicationID)
		setODO(ODO)
		setdescription(Description)
		setStatusID(StatusID)
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
				<FormInput onchangedata={handleData} ID={ID} Mac={Mac} LocalIp={LocalIp} Name={Name} ApplicationID={ApplicationID} ODO={ODO} Description={Description} StatusID={StatusID} onresetstatus={handleResetStatus} status={status} />
			</Modal>
		</>
	)
}




export default EditDevice