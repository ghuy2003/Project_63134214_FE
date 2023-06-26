import React, { useState } from 'react'

import { Space, Table, Row, Col } from 'antd'
import EditDevice from '@components/EditDevice/EditDevice'
import DeleteDevice from '@components/DeleteDevice/DeleteDevice'
import AddDevice from '@components/AddDevice/AddDevice'
import DeleteChoose from '@components/DeleteChoose/DeleteChoose'

const ManagerDevice = () => {
	const [dataSource, setDataSource] = useState(Array.from({ length: 100 }, (i) => ({
		key: i,
		name: 'John Brown',
		age: Number(`${i}2`),
		address: `New York No. ${i} Lake Park`,
		description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
	})))

	const columns = [
		{
			title: 'ID',
			dataIndex: 'Id'
		},
		{
			title: 'Mac',
			dataIndex: 'mac',
		},
		{
			title: 'Name',
			dataIndex: 'name'
		},
		{
			title: 'Application ID',
			dataIndex: 'applicationID'
		},
		{
			title: 'Description',
			dataIndex: 'description'
		},
		{
			title: 'CreateAt',
			dataIndex: 'createAt'
		},
		{
			title: 'UpdateAt',
			dataIndex: 'UpdateAt'
		},
		{
			title: 'Action',
			key: 'action',
			render: () => (
				<Space>
					<EditDevice />
					<DeleteDevice />
				</Space>
			),
		},
	]

	return (
		<Row gutter={[10, 10]}>
			<Col span={24}>
				<Space
					style={{
						width: '100%',
						background: 'white',
						borderRadius: 5,
						padding: 10
					}}
				>
					<DeleteChoose />
					<AddDevice />
				</Space>
			</Col>
			<Col span={24}>
				<Table
					size='small'
					bordered
					columns={columns}
					dataSource={dataSource}
					pagination={{
						position: ['bottomCenter'],
						showQuickJumper: true
					}}
				/>
			</Col>
		</Row>
	)
}

export default ManagerDevice