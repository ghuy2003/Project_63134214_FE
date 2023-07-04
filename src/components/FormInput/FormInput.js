import classNames from 'classnames/bind'
import Styles from './formInput.module.scss'
import {Form, Input} from 'antd'
import React from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const FormInput = ({...props}) => {
	const [form] = Form.useForm()
	const   { TextArea } = Input
	const  [ID, setId] = useState(props.ID)
	const  [Mac, setMac] = useState(props.Mac)
	const  [LocalIp, setLocalp] = useState(props.LocalIp)
	const  [Name, setName ] = useState(props.Name)
	const  [ApplicationID, setapplication] = useState(props.ApplicationID)
	const  [ODO, setODO] = useState(props.ODO)
	const  [Description, setdescription] = useState(props.Description)
	const  [StatusID, setStatus] = useState(props.StatusID)
	const onchange = props.onchangedata
	const onreset = props.onresetstatus
	useEffect(() => {
		onchange(ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID)
	}, [ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID])

	console.log(onreset)


	if(props.status) {
		form.resetFields()
		onreset()
	}

	if(!props.status) {
		return (
			<Form
				form={form}
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 16,
				}}
				layout='horizontal'
				size={'large'}
				style={{
					maxWidth: 600,
				}}
				className={cx('form__input')}
				initialValues={{ID,Mac,LocalIp,Name,ApplicationID,ODO,Description,StatusID }}
				onReset={() => {
					form.resetFields()
				}}
			>
				<Form.Item label='ID' name={'ID'} disabled >
					<Input disabled={true} value={ID} />
				</Form.Item>
				<Form.Item label='Mac' name={'Mac'}>
					<Input onChange={(e) => {
						setMac(e.target.value)
					}} value={Mac}/>
				</Form.Item>
				<Form.Item label='Local Ip' name={'LocalIp'}>
					<Input onChange={(e) => {
						setLocalp(e.target.value)
					}} value={LocalIp}/>
				</Form.Item>
				<Form.Item label='Name' name={'Name'}>
					<Input value={Name} onChange={(e) => {
						setName(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='Application ID' name={'ApplicationID'}>
					<Input value={ApplicationID} onChange={(e) => {
						setapplication(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='ODO' name={'ODO'}>
					<Input value={ODO} onChange={(e) => {
						setODO(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='Description' name={'Description'}>
					<TextArea value={Description} rows={3} onChange={(e) => {
						setdescription(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='Status ID' name={'StatusID'}>
					<Input value={StatusID} onChange={(e) => {
						setStatus(e.target.value)
					}} />
				</Form.Item>
			</Form>
		)
	}
}



export default FormInput