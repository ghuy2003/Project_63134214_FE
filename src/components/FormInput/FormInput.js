<<<<<<< HEAD
import classNames from 'classnames/bind'
import Styles from './formInput.module.scss'
import {
    Form,
    Input,
} from 'antd';
import { useEffect, useState } from 'react';
const cx = classNames.bind(Styles)
  const FormInput = ( props ) => {
  const { TextArea } = Input;
  const  [ID, setId] = useState('')
  const  [Mac, setMac] = useState('')
  const  [Name, setName ] = useState('')
  const  [ApplicationID, setapplication] = useState('')
  const  [Description, setdescription] = useState('')

  const onchange = props.onchangedata
  useEffect(() => {
    onchange(ID, Mac, Name, ApplicationID, Description);
  }, [ID, Mac, Name, ApplicationID, Description])
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
      size={'large'}
      style={{
        maxWidth: 600,
      }}
      className={cx('form__input')}
    >
      <Form.Item label="ID" name={"ID"}>
        <Input onChange={(e) => {
          setId(e.target.value)
          }} />
      </Form.Item>
      <Form.Item label="Mac" name={"Mac"}>
        <Input onChange={(e) => {
          setMac(e.target.value)
        }} />
      </Form.Item>
      <Form.Item label="Name" name={"Name"}>
        <Input onChange={(e) => {
          setName(e.target.value)
        }} />
      </Form.Item>
      <Form.Item label="Application ID" name={"ApplicationID"}>
        <Input onChange={(e) => {
          setapplication(e.target.value)
        }} />
      </Form.Item>
      <Form.Item label="Description" name={"Description"}>
          <TextArea rows={3} onChange={(e) => {
            setdescription(e.target.value)
          }} />
      </Form.Item>
    </Form>
  );
};
=======
import React from 'react'
import useTranslate from '@lang'

import { Form, Input, Space, Typography } from 'antd'

const { TextArea } = Input
const { Text } = Typography

const AddonBefore = ({ title = '', width = 100, align = 'center' }) => {
	return (
		<div style={{ width, textAlign: align }}>
			<Text>
				{title}
			</Text>
		</div>
	)
}

const FormInput = () => {
	const t = useTranslate()

	return (
		<Form>
			<Space
				direction='vertical'
				style={{ width: '100%' }}
			>
				<Input
					addonBefore={<AddonBefore title='ID' />}
				/>
				<Input
					addonBefore={<AddonBefore title='Mac' />}
				/>
				<Input
					addonBefore={<AddonBefore title='Name' />}
				/>
				<Input
					addonBefore={<AddonBefore title='Application ID' />}
				/>
				<TextArea
					placeholder={t('description')}
				/>
			</Space>
		</Form>
	)
}
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69



export default FormInput