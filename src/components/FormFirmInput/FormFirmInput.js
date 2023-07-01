import classNames from 'classnames/bind'
import Styles from './formFirmInput.module.scss'
import {Form, Input} from 'antd'
import React from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const FormFirmInput = ({...props}) => {

	const   { TextArea } = Input
	const  [ID, setId] = useState(props.ID)
	const  [Name, setName ] = useState(props.Name)
	const  [Data, setData ] = useState(props.Data)
	const  [LocalLink, setLocalLink ] = useState(props.LocalLink)
	const  [Description, setdescription] = useState(props.Description)
	const  [status, setStatus] = useState(props.status)
	const onchange = props.onchangedata
	useEffect(() => {
		onchange(ID, Name, Data, LocalLink , Description)
	}, [ID, Name, Data, LocalLink, Description])
	// useEffect(() => {
	// 	handleReset()
	// }, [status])
	// const handleReset = ()  => {
	// 	setId(''),
	// 	setMac(''),
	// 	setName(''),
	// 	setapplication(''),
	// 	setdescription('')
	// 	setStatus(!props.status)
	// }


	if(ID) {
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
				initialValues={{ID,Name, Data,LocalLink, Description}}
			>
				<Form.Item label='ID' name={'ID'} disabled >
					<Input disabled={true} value={ID} />
				</Form.Item>
				<Form.Item label='Name' name={'Name'}>
					<Input value={Name} onChange={(e) => {
						setName(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='Data' name={'Data'}>
					<Input value={Data} onChange={(e) => {
						setData(e.target.value)
					}} />
				</Form.Item>
				<Form.Item label='LocalLink' name={'LocalLink'}>
					<Input value={LocalLink} onChange={(e) => {
						setLocalLink(e.target.value)
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
}



export default FormFirmInput