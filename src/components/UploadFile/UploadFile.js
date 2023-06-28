import { Button, Modal, Form, Upload } from 'antd'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import classNames from 'classnames/bind'
import Styles from './UploadFile.module.scss'
import FormInput from '@components/FormInput/FormInput'
const cx = classNames.bind(Styles)
const UploadFile = () => {

	const normFile = (e) => {
		console.log('Upload event:', e)
		if (Array.isArray(e)) {
			return e
		}
		return e?.fileList
	}



  
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
			<div className={cx('upload__btn')} onClick={showModal}>
				<Button type='primary' style={{borderRadius: '20px', backgroundColor: 'rgb(39 183 236)'}}>
					<FontAwesomeIcon icon={faUpload} style={{marginRight: '5px'}} />
                        Upload
				</Button>
			</div>
			<Modal
				title='Upload File'
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Upload'
				className='upload __form'
				okButtonProps={{ style: { backgroundColor: 'rgb(39 183 236)', } }} 
			>
               
				<Form.Item label='Dragger'>
					<Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
						<Upload.Dragger name='files' action='/upload.do'>
							<p className='ant-upload-drag-icon'>
								<InboxOutlined />
							</p>
							<p className='ant-upload-text'>Click or drag file to this area to upload</p>
							<p className='ant-upload-hint'>Support for a single or bulk upload.</p>
						</Upload.Dragger>
					</Form.Item>
				</Form.Item>
			</Modal>
		</>
	)
}
export default UploadFile