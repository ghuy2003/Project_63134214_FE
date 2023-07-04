import classNames from 'classnames/bind'
import Styles from './AddForm.module.scss'
import {Form, Input, Button} from 'antd'
import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const AddForm = ({...props}) => {


	const  { TextArea } = Input
	const  [form] = Form.useForm()
	const  [ID, setId] = useState(props.ID)
	const  [Mac, setMac] = useState(props.Mac)
	const  [LocalIp, setLocalIp] = useState(props.LocalIp)
	const  [Name, setName ] = useState(props.Name)
	const  [ApplicationID, setapplication] = useState(props.ApplicationID)
	const  [ODO, setODO] = useState(props.ODO)
	const  [Description, setdescription] = useState(props.Description)
	const  [StatusID, setStatusID] = useState(props.StatusID)

	const onchange = props.onchangedata
	const onreset = props.onresetstatus

	useEffect(() => {
		onchange(ID, Mac, LocalIp, Name, ApplicationID, ODO, Description, StatusID)
	}, [ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID])

	
	if(props.status) {
		form.resetFields()
		onreset()
	}
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
		>
			<Form.Item label='ID' name={'ID'} >
				<Input onChange={(e) => {
					setId(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Mac' name={'Mac'}>
				<Input onChange={(e) => {
					setMac(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Local Ip' name={'LocalIp'}>
				<Input onChange={(e) => {
					setLocalIp(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Name' name={'Name'}>
				<Input  onChange={(e) => {
					setName(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Application ID' name={'ApplicationID'}>
				<Input  onChange={(e) => {
					setapplication(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='ODO' name={'ODO'}>
				<Input  onChange={(e) => {
					setODO(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Description' name={'Description'}>
				<TextArea  rows={3} onChange={(e) => {
					setdescription(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='StatusID' name={'StatusID'}>
				<Input  onChange={(e) => {
					setStatusID(e.target.value)
				}} />
			</Form.Item>
		</Form>
	)
}

export default AddForm