import classNames from "classnames/bind"
import Styles from './ManagerDevice.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faSquarePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Form, Radio, Space, Table, Row, Button, Modal } from 'antd'; 
import { useState } from 'react';
import EditDevice from "@components/EditDevice/EditDevice";
import DeleteDevice from "@components/DeleteDevice/DeleteDevice";
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


    const columns = [
      {
        title: 'ID',
        dataIndex: 'Id',
        sorter: true,
      },
      {
        title: 'Mac',
        dataIndex: 'mac',
      },
      {
        title :'Name',
        dataIndex: 'name'
      },
      {
        title :'Application ID',
        dataIndex: 'applicationID'
      },
      {
        title :'Description',
        dataIndex: 'description'
      },
      {
        title :'CreateAt',
        dataIndex: 'createAt'
      },
      {
        title :'UpdateAt',
        dataIndex: 'UpdateAt'
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
    const data = [];
    for (let i = 1; i <= 50; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: Number(`${i}2`),
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }
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
              <Button type="primary" style={{borderRadius: '20px', backgroundColor: "rgb(37 174 53)"}}>
                <FontAwesomeIcon icon={faPlus} style={{marginRight: '5px'}} />
                  Add Device
                </Button>
            </Row>


            <Table
            {...tableProps}
            pagination={{
                position: [top, bottom],
            }}
            columns={tableColumns}
            dataSource={hasData ? data : []}
            scroll={scroll}
            />
      </div>
    );
  };

export default ManagerDevice;