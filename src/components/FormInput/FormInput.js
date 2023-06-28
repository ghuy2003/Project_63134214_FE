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



  export default FormInput;