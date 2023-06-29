import { Button, Modal } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Adminacction from '@components/Adminacction/Adminacction'
import { useState } from 'react'
import FormInput from '@components/FormInput/FormInput'
import classNames from 'classnames/bind'
import Styles from './Download.module.scss'
import React from 'react'
const cx = classNames.bind(Styles)
const Download = () => {
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [modalText, setModalText] = useState('Content of the modal')
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
		}, 2000)
	}
	const handleCancel = () => {
		console.log('Clicked cancel button')
		setOpen(false)
	}
	return (
		<>
			<Button type='primary' icon={<DownloadOutlined />} size={'large'}>
            Download
			</Button>
		</>
	)
}




export default Download