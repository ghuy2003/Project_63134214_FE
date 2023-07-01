import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Styles from './AddApp.module.scss'
import AddForm from '@components/AddForm/AddForm'
import useApplication from '@api/useApplication'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(Styles)


const AddApp = ({onchange}) => {

	const [ID, setId] = useState('')
	const [Mac, setMac] = useState('')
	const [Name, setName ] = useState('')
	const [ApplicationID, setapplication] = useState('')
	const [Description, setdescription] = useState('')

	const  [status, setStatus] = useState(false)

	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {createApplication} = useApplication()


	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		const {success,data} = await createApplication({ ID, Mac, Name, Description, ApplicationID })
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
	const handleData = (ID, Mac, Name, ApplicationID, Description) => {
		setId(ID) 
		setMac(Mac)
		setName(Name)
		setapplication(ApplicationID)
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
				title='Add New Device'
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Add New'
				className='add__form'
				okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
			>
				<AddForm onchangedata={handleData} onresetstatus={handleReset} status={status} />
			</Modal>
		</>
	)
}
export default AddApp
