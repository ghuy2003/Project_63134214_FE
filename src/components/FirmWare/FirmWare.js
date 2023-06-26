import classNames from 'classnames/bind'
import Styles from './FirmWare.module.scss'
import { Table, Space, Row, Col } from 'antd'
import qs from 'qs'
import { useEffect, useState } from 'react'
import Download from '@components/Download/Download'
import UploadFile from '@components/UploadFile/UploadFile'
import EditDevice from '@components/EditDevice/EditDevice'
import EditName from '@components/EditNamefile/EditNameFile'
const cx = classNames.bind(Styles)
const columns = [
	{
		title: 'File',
		dataIndex: 'Name',
		width: '40%',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		width: '20%',
	},
	{
		title: 'Edit name',
		dataIndex: 'file',
		width: '20%',
		render: () => (
			<Space size='middle'>
				<a><EditName /></a>
			</Space>
		),
	},
	{
		title: 'Action',
		dataIndex: 'email',
		render: () => (
			<Space size='middle'>
				<a><Download /></a>
			</Space>
		),
	},
]
const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
})
const FirmWare  = () => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	})
	const fetchData = () => {
		setLoading(true)
		fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
			.then((res) => res.json())
			.then(({ results }) => {
				setData(results)
				setLoading(false)
				setTableParams({
					...tableParams,
					pagination: {
						...tableParams.pagination,
						total: 200,
					},
				})
			})
	}

	useEffect(() => {
		fetchData()
	}, [JSON.stringify(tableParams)])
	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			...sorter,
		})
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([])
		}
	}
	return (


		<>
    
			<Row className={cx('firmware__header')}>
				<UploadFile />
			</Row>
    
			<Table
				columns={columns}
				rowKey={(record) => record.login.uuid}
				dataSource={data}
				pagination={tableParams.pagination}
				loading={loading}
				onChange={handleTableChange}
			/>
		</>
	)
}
export default FirmWare 
