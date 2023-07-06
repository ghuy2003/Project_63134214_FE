import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Applications.module.scss'
import { Table, Space, Row, Col } from 'antd'
import qs from 'qs'
import { useEffect, useState } from 'react'
import Download from '@components/Download/Download'
import UploadFile from '@components/UploadFile/UploadFile'
import useApplication from '@api/useApplication'
import AddApp from '@components/AddApp/AddApp'
import EditApplication from '@components/EditApplication/EditApplication'
import DeleteAppChoose from '@components/DeleteAppChoose/DeleteAppChoose'
import DeleteApp from '@components/DeleteApp/DeleteApp'
const cx = classNames.bind(Styles)


const Application  = () => {
	const columns = [
		{
			title: 'ID',
			dataIndex: 'ID',
			sorter: true,
		},
		{
			title :'Name',
			dataIndex: 'Name'
		},
		{
			title :'Firmware ID',
			dataIndex: 'FirmwareID'
		},
		{
			title :'Version',
			dataIndex: 'Version'
		},
		{
			title :'Description',
			dataIndex: 'Description'
		},
		{
			title :'CreateAt',
			dataIndex: 'CreatedAt'
		},
		{
			title :'UpdateAt',
			dataIndex: 'UpdatedAt'
		},
		{
			title: 'Action',
			dataIndex: 'ID',
			render: (text, record) => (
				<Space size='middle'>
					<EditApplication ID={record.ID} dvName={record.Name} dvFirmID={record.FirmwareID} dvVersion={record.Version} dvDescription={record.Description} onchange={handleChangeData} />
					<DeleteApp ID={record.ID} onchange={handleChangeData}/>
				</Space>
			),
		},
	]



	const [bordered, setBordered] = useState(true)
	const [loading, setLoading] = useState(false)
	const [size, setSize] = useState('large')
	const [expandable, setExpandable] = useState(false)
	const [showTitle, setShowTitle] = useState(false)
	const [showHeader, setShowHeader] = useState(true)
	const [showfooter, setShowFooter] = useState(false)
	const [hasData, setHasData] = useState(true)
	const [tableLayout, setTableLayout] = useState(true)
	const [top, setTop] = useState('none')
	const [bottom, setBottom] = useState('bottomRight')
	const [ellipsis, setEllipsis] = useState(false)
	const [yScroll, setYScroll] = useState(false)
	const [xScroll, setXScroll] = useState('fixed')
	


	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [dataApplications, setData] = useState([])
	const [changeData, setChangeData] = useState(false)

	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0
	

	const { getApplication } = useApplication()
	const handleGetAllDevice = async () => {
		handleLoadingChange(true)
		const {success, data} = await getApplication()
		if(success) {
			setData([...data])
			handleLoadingChange(false)
		}
	}
	const handleChangeData = () => {
		setChangeData(!changeData)
	}

	useEffect(() => {
		handleGetAllDevice()
	}, [changeData])

	const defaultExpandable = {
		expandedRowRender: (record) => <p>{record.description}</p>,
	}
	const defaultTitle = () => 'Here is title'
	const defaultFooter = () => 'Here is footer'
	// handleFunction
	const handleLoadingChange = (enable) => {
		setLoading(enable)
	}
	// 
	const scroll = {}
	if (yScroll) {
		scroll.y = 300
	}
	if (xScroll) {
		scroll.x = '100%'
	}
	const tableColumns = columns.map((item) => ({
		...item,
		ellipsis,
	}))
	if (xScroll === 'fixed') {
		tableColumns[tableColumns.length - 1].fixed = 'right'
	}
	const tableProps = {
		bordered,
		loading,
		size,
		expandable,
		title: showTitle ? defaultTitle : undefined,
		showHeader,
		footer: showfooter ? defaultFooter : undefined,
		scroll,
		tableLayout,
	}

  
	return (
		<div style={{height: '100%', width: '100%'}}>
			<Row className={cx('table__header')}>
				<Col
					xs={{
						span: 2,
						offset: 1,
					}}
					lg={{
						span: 3,
						offset: 4,
					}}
				>
					<DeleteAppChoose onchange={handleChangeData} disable={!hasSelected} selectedRowKeys={selectedRowKeys}  />
				</Col>
				<Col>
					<AddApp onchange={handleChangeData} />
				</Col>
			</Row>
			<Table
				rowKey={obj => obj.ID}
				rowSelection={rowSelection}
				{...tableProps}
				pagination={
					{	
						position: ['top'],
						defaultPageSize: 10,
						showSizeChanger: true,
						pageSizeOptions: ['10', '20', '30'],
					}
				}
				columns={tableColumns}
				dataSource={hasData ? dataApplications : []}
				scroll={scroll}
			/>
		</div>
	)
}
export default Application 


