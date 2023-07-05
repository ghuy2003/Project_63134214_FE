import classNames from 'classnames/bind'
import Styles from './FirmWare.module.scss'
import React from 'react'
import { Table, Space, Row, Col, Upload } from 'antd'
import qs from 'qs'
import { useEffect, useState } from 'react'
import Download from '@components/Download/Download'
import UploadFile from '@components/UploadFile/UploadFile'
import DeleteFirm from '@components/DeleteFirm/DeleteFirm'
import useFirmware from '@api/useFirmwares'
import AddFirm from '@components/AddFirm/AddFirm'
import DeleteChooseFirm from '@components/DeleteFirmChoose/DeleteChooseFirm'
import EditFirm from '@components/EditFirm/EditFirm'
const cx = classNames.bind(Styles)


const FirmWare  = () => {

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

	const [dataFirms, setData] = useState([])
	const [changeData, setChangeData] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState([])


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
			title :'Data (Hex)',
			dataIndex: 'Data',
			key: 'data',
			render: (text,record) => {
				if(text !== null) {
					const toHexString = byteArray => Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('')
					return toHexString(text.data).substring(0,12) + '...'
				} else {
					return text
				}
			}
		},
		{
			title :'Local Link',
			dataIndex: 'LocalLink',
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
			key: 'ID',
			render: (text, record) => (
				<Space size='middle'>
					<a><EditFirm  ID={record.ID}  dvName={record.Name} dvData={record.Data != null ? record.Data.type : record.Data} dvLink={record.LocalLink} dvDescription={record.Description} onchange={handleChangeData} /></a>
					<a><DeleteFirm ID={record.ID} onchange={handleChangeData} /></a>
					<a><UploadFile ID={record.ID} onchange={handleChangeData}  /> </a>
				</Space>
			),
		},
	]


	const { getFirms } = useFirmware()
	const handleGetAllFirm = async () => {
		handleLoadingChange(true)
		const {success, data} = await getFirms()
		if(success) {
			setData([...data])
			handleLoadingChange(false)
		}
	}

	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	useEffect(() => {
		handleGetAllFirm()
	}, [changeData])

	
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0

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

	const handleChangeData = () => {
		setChangeData(!changeData)
	}



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
					<DeleteChooseFirm onchange={handleChangeData} disable={!hasSelected} selectedRowKeys={selectedRowKeys}  />
				</Col>
				<Col>
					<AddFirm onchange={handleChangeData} />
				</Col>
			</Row>
  
  
			<Table
				rowKey={obj => obj.ID}
				rowSelection={rowSelection}
				{...tableProps}
				pagination={{
					position: [top, bottom],
					pageSize: 7
				}}
				columns={tableColumns}
				dataSource={hasData ? dataFirms : []}
				scroll={scroll}
			/>
		</div>
	)
}
export default FirmWare 




