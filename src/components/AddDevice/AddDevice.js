import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Styles from './AddDevice.module.scss'
import FormInput from '@components/FormInput/FormInput'
import useDevices from '@api/useDevices'
import { useNavigate } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(Styles)


const AddDevice = () => {

	const [ID, setId] = useState('')
	const [Mac, setMac] = useState('')
	const [Name, setName ] = useState('')
	const [ApplicationID, setapplication] = useState('')
	const [Description, setdescription] = useState('')



	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {createDevice} = useDevices()


	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		const {data} = await createDevice({ ID, Mac, Name, Description, ApplicationID })
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
			setId('')
			setMac('')
			setName('')
			setapplication('')
			setdescription('')
		}, 2000)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleData = (ID, Mac, Name, ApplicationID, Description) => {
		setId(ID)
		setMac(Mac)
		setName(Name)
		setapplication(ApplicationID)
		setdescription(Description)
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
				okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
			>
				<FormInput onchangedata={handleData} ID={ID} Mac={Mac} Name={Name} ApplicationID={ApplicationID} Description={Description} />
			</Modal>
		</>
	)
}
export default AddDevice
