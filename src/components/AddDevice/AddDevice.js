import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Styles from './AddDevice.module.scss'
import AddForm from '@components/AddForm/AddForm'
import useDevices from '@api/useDevices'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(Styles)


const AddDevice = ({onchange}) => {

	const [ID, setId] = useState('')
	const [Mac, setMac] = useState('')
	const [LocalIp, setLocalIp] = useState('')
	const [Name, setName ] = useState('')
	const [ApplicationID, setapplication] = useState('')
	const [ODO, setODO] = useState('')
	const [Description, setdescription] = useState('')
	const [StatusID, setStatusID] = useState('')

	const  [status, setStatus] = useState(false)

	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {createDevice} = useDevices()


	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		const {success,data} = await createDevice({ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID })
		if(success) {
			setConfirmLoading(true)
			setTimeout(() => {
				setConfirmLoading(false)
				setOpen(false)
				setConfirmLoading(false)
				onchange()
				handleReset()
			}, 2000)
		}
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleData = (ID, Mac, LocalIp, Name, ApplicationID, ODO, Description, StatusID) => {
		setId(ID) 
		setMac(Mac)
		setLocalIp(LocalIp)
		setName(Name)
		setapplication(ApplicationID)
		setODO(ODO)
		setdescription(Description)
		setStatusID(StatusID)
	}
	const handleReset = () =>  {
		setStatus(true)
	}
	const handleResetStatus = () => {
		setStatus(false)
	}
	return (
		<>
			<div className={cx('delete__btn')} onClick={showModal}>
				<Button type='primary' style={{borderRadius: '20px', backgroundColor: 'rgb(37 174 53)'}}>
					<FontAwesomeIcon icon={faPlus} style={{marginRight: '5px'}} />
                        Add Device
				</Button>
			</div>
			<Modal
				title='Add New Device'
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Add New'
				className='add__form'
				style={{top: '50px'}}
				okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
			>
				<AddForm onchangedata={handleData} onresetstatus={handleResetStatus} status={status} />
			</Modal>
		</>
	)
}
export default AddDevice
