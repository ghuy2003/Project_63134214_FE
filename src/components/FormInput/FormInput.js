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



export default FormInput