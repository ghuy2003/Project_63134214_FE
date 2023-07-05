import classNames from 'classnames/bind'
import Styles from './AddFormFirm.module.scss'
import {Form, Input, Button} from 'antd'
import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const AddFormFirm = ({...props}) => {
	const [form] = Form.useForm()

	const  { TextArea } = Input
	const [ID, setId] = useState(props.ID)
	const [Name, setName ] = useState(props.Name)
	// const [Data, setData ] = useState(props.Data)
	// const [locallink, setLocalLink ] = useState(props.locallink)
	const [Description, setdescription] = useState(props.Description)

	const onchange = props.onchangedata
	const reset = props.onresetstatus

	useEffect(() => {
		onchange(ID, Name, Description)
	}, [ID, Name, Description])

	if(props.status) {
		form.resetFields()
		reset()
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
				<Input  onChange={(e) => {
					setId(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Name' name={'Name'}>
				<Input   onChange={(e) => {
					setName(e.target.value)
				}} />
			</Form.Item>
			{/* <Form.Item label='Data' name={'Data'}>
				<Input  onChange={(e) => {
					setData(e.target.value)
				}} />
			</Form.Item> */}
			{/* <Form.Item label='LocalLink' name={'locallink'}>
				<Input  onChange={(e) => {
					setLocalLink(e.target.value)
				}} />
			</Form.Item> */}
			<Form.Item label='Description' name={'Description'}>
				<TextArea  rows={3} onChange={(e) => {
					setdescription(e.target.value)
				}} />
			</Form.Item>
		</Form>
	)
}

export default AddFormFirm