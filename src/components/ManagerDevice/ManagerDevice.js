import classNames from 'classnames/bind'
import Styles from './ManagerDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Form, Radio, Space, Table, Row, Button, Modal, Col } from 'antd' 
import { useEffect, useState } from 'react'
import React from 'react'
import EditDevice from '@components/EditDevice/EditDevice'
import DeleteDevice from '@components/DeleteDevice/DeleteDevice'
import AddDevice from '@components/AddDevice/AddFirrm'
import DeleteChoose from '@components/DeleteChoose/DeleteChoose'
import useDevices from '@api/useDevices'
import { type } from '@testing-library/user-event/dist/type'
const cx = classNames.bind(Styles)

const ManagerDevice = () => {
	
	
	const [bordered, setBordered] = useState(true)
	const [loading, setLoading] = useState(false)
	const [size, setSize] = useState('large')
	const [expandable, setExpandable] = useState(false)
	const [showTitle, setShowTitle] = useState(false)
	const [showHeader, setShowHeader] = useState(true)
	const [showfooter, setShowFooter] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [hasData, setHasData] = useState(true)
	const [tableLayout, setTableLayout] = useState(true)
	const [top, setTop] = useState('none')
	const [bottom, setBottom] = useState('bottomRight')
	const [ellipsis, setEllipsis] = useState(false)
	const [yScroll, setYScroll] = useState(false)
	const [xScroll, setXScroll] = useState()
	const [dataDevices, setData] = useState([])
	const [changeData, setChangeData] = useState(false)
	const columns = [
		{
			title: 'ID',
			dataIndex: 'ID',
			sorter: true,
		},
		{
			title: 'Mac',
			dataIndex: 'MAC',
		},
		{
			title :'Name',
			dataIndex: 'Name',
		},
		{
			title :'Application ID',
			dataIndex: 'AppID',

		},
		{
			title :'Description',
			dataIndex: 'Description',
		},
		{
			title :'CreateAt',
			dataIndex: 'CreatedTime'
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
					<EditDevice ID={record.ID} dvMac={record.MAC} dvName={record.Name} dvApp={record.AppID} dvDescription={record.Description} onchange={handleChangeData} />
					<DeleteDevice ID={record.ID} onchange={handleChangeData}/>
				</Space>
			),
		},
	]

	const { getDevices } = useDevices()
	const handleGetAllDevice = async () => {
		handleLoadingChange(true)
		const {success, data} = await getDevices()
		if(success) {
			setData([...data])
			handleLoadingChange(false)
		}
	}
	useEffect(() => {
		handleGetAllDevice()
	}, [changeData])

	const handleChangeData = () => {
		setChangeData(!changeData)
	}

	const defaultExpandable = {
		expandedRowRender: (record) => <p>{record.description}</p>,
	}
	const defaultTitle = () => 'Here is title'
	const defaultFooter = () => 'Here is footer'
	// handleFunction
	const handleBorderChange = (enable) => {
		setBordered(enable)
	}
	const handleLoadingChange = (enable) => {
		setLoading(enable)
	}
	const handleSizeChange = (e) => {
		setSize(e.target.value)
	}
	const handleTableLayoutChange = (e) => {
		setTableLayout(e.target.value)
	}
	const handleExpandChange = (enable) => {
		setExpandable(enable ? defaultExpandable : undefined)
	}
	const handleEllipsisChange = (enable) => {
		setEllipsis(enable)
	}
	const handleDataChange = (newHasData) => {
		setHasData(newHasData)
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
		tableColumns[0].fixed = true
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

	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0

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
					<DeleteChoose onchange={handleChangeData} disable={!hasSelected} selectedRowKeys={selectedRowKeys} />
				</Col>
				<Col>
					<AddDevice onchange={handleChangeData} />
				</Col>
			</Row>
  
					
			<Table
				rowSelection={
					rowSelection
				} 
				{...tableProps}
				rowKey={obj => obj.ID}
				pagination={{
					position: [top, bottom],
				}}
				columns={tableColumns}
				dataSource={hasData ? dataDevices : []}
				scroll={scroll}
			/>
		</div>
	)
  
}

export default ManagerDevice