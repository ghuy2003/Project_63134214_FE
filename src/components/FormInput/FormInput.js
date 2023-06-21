import classNames from 'classnames/bind'
import Styles from './formInput.module.scss'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    Select,
    TreeSelect,
} from 'antd';
const cx = classNames.bind(Styles)
    const FormInput = () => {
    const { TextArea } = Input;
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
        <Form.Item label="Id">
          <Input />
        </Form.Item>
        <Form.Item label="Mac">
          <Input />
        </Form.Item>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Application ID">
          <Input />
        </Form.Item>

        <Form.Item label="Description">
            <TextArea rows={3} />
        </Form.Item>
      </Form>
    );
  };



  export default FormInput;