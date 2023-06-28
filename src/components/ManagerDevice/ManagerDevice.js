<<<<<<< HEAD
import classNames from "classnames/bind"
import Styles from './ManagerDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Form, Radio, Space, Table, Row, Button, Modal, Col } from 'antd'; 
import { useEffect, useState } from 'react';
import EditDevice from "@components/EditDevice/EditDevice";
import DeleteDevice from "@components/DeleteDevice/DeleteDevice";
import AddDevice from "@components/AddDevice/AddDevice";
import DeleteChoose from "@components/DeleteChoose/DeleteChoose";
import useDevices from "@api/useDevices";
const cx = classNames.bind(Styles)

const ManagerDevice = () => {
  const [bordered, setBordered] = useState(true);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(true);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();

  const [dataDevices, setData] = useState([])
=======
import React, { useState } from 'react'

import { Space, Table, Row, Col } from 'antd'
import EditDevice from '@components/EditDevice/EditDevice'
import DeleteDevice from '@components/DeleteDevice/DeleteDevice'
import AddDevice from '@components/AddDevice/AddDevice'
import DeleteChoose from '@components/DeleteChoose/DeleteChoose'
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69

const ManagerDevice = () => {
	const [dataSource, setDataSource] = useState(Array.from({ length: 100 }, (i) => ({
		key: i,
		name: 'John Brown',
		age: Number(`${i}2`),
		address: `New York No. ${i} Lake Park`,
		description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
	})))

<<<<<<< HEAD

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
      dataIndex: 'Name'
    },
    {
      title :'Application ID',
      dataIndex: 'AppID'
    },
    {
      title :'Description',
      dataIndex: 'Description'
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
      key: 'action',
      render: () => (
        <Space size="middle">
            <a><EditDevice /></a>
            <a><DeleteDevice /></a>
        </Space>
      ),
    },
  ];

  const { getDevices } = useDevices();
  const handleGetAllDevice = async () => {
    handleLoadingChange(true)
    const {success, data} = await getDevices();
    if(success) {
      setData([...data])
      handleLoadingChange(false)
    }
  }
  useEffect(() => {
     handleGetAllDevice()
  }, []);
  
  // for (let i = 1; i <= 50; i++) {
  //   data.push({
  //     key: i,
  //     name: 'John Brown',
  //     age: Number(`${i}2`),
  //     address: `New York No. ${i} Lake Park`,
  //     description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  //   });
  // }
  const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
  };
  const defaultTitle = () => 'Here is title';
  const defaultFooter = () => 'Here is footer';
  // handleFunction
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const handleEdit = (e) => {
      
  }
=======
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
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69

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

<<<<<<< HEAD
  // 
  const scroll = {};
  if (yScroll) {
    scroll.y = 300;
  }
  if (xScroll) {
    scroll.x = '100%';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  
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
                <DeleteChoose />
              </Col>
              <Col>
                  <AddDevice />
              </Col>
            </Row>
  
  
            <Table
            {...tableProps}
            pagination={{
                position: [top, bottom],
            }}
            columns={tableColumns}
            dataSource={hasData ? dataDevices : []}
            scroll={scroll}
            />
      </div>
    );
  
};

export default ManagerDevice;
=======
export default ManagerDevice
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69
