import classNames from 'classnames/bind'
import Styles from './FormFirm.module.scss'
import {
	Form,
	Input,
} from 'antd'
const cx = classNames.bind(Styles)
const FormFirm = () => {
	const { TextArea } = Input
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
		>
			<Form.Item label='Id'>
				<Input />
			</Form.Item>
			<Form.Item label='File'>
				<Input />
			</Form.Item>
			<Form.Item label='FileName'>
				<Input />
			</Form.Item>
		</Form>
	)
}



export default FormFirm