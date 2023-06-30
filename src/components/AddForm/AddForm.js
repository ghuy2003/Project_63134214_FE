import classNames from 'classnames/bind'
import Styles from './AddForm.module.scss'
import {Form, Input, Button} from 'antd'
import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const AddForm = ({...props}) => {
	const  { TextArea } = Input
	const  [ID, setId] = useState(props.ID)
	const  [Mac, setMac] = useState(props.Mac)
	const  [Name, setName ] = useState(props.Name)
	const  [ApplicationID, setapplication] = useState(props.ApplicationID)
	const  [Description, setdescription] = useState(props.Description)

	const onchange = props.onchangedata

	useEffect(() => {
		onchange(ID, Mac, Name, ApplicationID, Description)
	}, [ID, Mac, Name, ApplicationID, Description])
	console.log(props.status)
	return (
		<Form
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
			initialValues={{ID, Mac, Name, ApplicationID, Description}}
			
		>
			<Form.Item label='ID' name={'ID'} >
				<Input value={ID} onChange={(e) => {
					setId(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Mac' name={'Mac'}>
				<Input value={Mac} onChange={(e) => {
					setMac(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Name' name={'Name'}>
				<Input value={Name}  onChange={(e) => {
					setName(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Application ID' name={'ApplicationID'}>
				<Input value={ApplicationID}  onChange={(e) => {
					setapplication(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Description' name={'Description'}>
				<TextArea value={Description} rows={3} onChange={(e) => {
					setdescription(e.target.value)
				}} />
			</Form.Item>
		</Form>
	)
}

export default AddForm