import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Styles from './AddApp.module.scss'
import useApplication from '@api/useApplication'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddAppForm from '@components/AddAppForm/AddAppForm'
const cx = classNames.bind(Styles)


const AddApp = ({onchange}) => {

	const [ID, setId] = useState('')
	const [Name, setName ] = useState('')
	const [FirmID, setFirmID ] = useState('')
	const [Version, setVerison] = useState('')
	const [Description, setdescription] = useState('')

	const  [status, setStatus] = useState(false)

	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const { createApplication } = useApplication()


	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		const {success,data} = await createApplication({ ID, Name, FirmID, Version ,Description })
		console.log(success)
		handleReset()
		if(success) {
			onchange()
		}
		// setConfirmLoading(true)
		// setTimeout(() => {
		// 	if(success) {
		// 		setOpen(false)
		// 		setConfirmLoading(false)
		// 	}	
		// }, 2000)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleData = (ID, Name, FirmID, version, Description) => {
		setId(ID) 
		setFirmID(FirmID)
		setName(Name)
		setVerison(version)
		setdescription(Description)
	}
	const handleReset = () =>  {
		setStatus(true)
	}

	return (
		<>
			<div className={cx('delete__btn')} onClick={showModal}>
				<Button type='primary' style={{borderRadius: '20px', backgroundColor: 'rgb(37 174 53)'}}>
					<FontAwesomeIcon icon={faPlus} style={{marginRight: '5px'}} />
                        Add Application
				</Button>
			</div>
			<Modal
				title='Add New Application'
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Add New'
				className='add__form'
				okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
			>
				<AddAppForm onchangedata={handleData} onresetstatus={handleReset} status={status} />
			</Modal>
		</>
	)
}
export default AddApp
