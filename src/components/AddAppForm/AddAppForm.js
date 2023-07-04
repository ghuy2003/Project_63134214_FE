import classNames from 'classnames/bind'
import Styles from './AddAppForm.module.scss'
import {Form, Input, Button} from 'antd'
import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const AddAppForm = ({...props}) => {


	const  { TextArea } = Input
	const  [form] = Form.useForm()
	const  [ID, setId] = useState(props.ID)
	const  [Name, setName ] = useState(props.Name)
	const  [FirmID, setFirmID ] = useState(props.FirmID)
	const  [version, setVerison] = useState(props.version)
	const  [Description, setdescription] = useState(props.Description)

	const onchange = props.onchangedata
	const onreset = props.onresetstatus


	console.log(onreset)
	useEffect(() => {
		onchange(ID, Name,FirmID,version, Description)
	}, [ID,Name,FirmID, version, Description])

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
			<Form.Item label='Name' name={'Name'}>
				<Input  onChange={(e) => {
					setName(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Firmware ID' name={'FirmID'}>
				<Input onChange={(e) => {
					setFirmID(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Version' name={'verison'}>
				<Input  onChange={(e) => {
					setVerison(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Description' name={'Description'}>
				<TextArea  rows={3} onChange={(e) => {
					setdescription(e.target.value)
				}} />
			</Form.Item>
		</Form>
	)
}

export default AddAppForm