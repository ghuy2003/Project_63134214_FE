import classNames from "classnames/bind";
import Styles from './FirmWare.module.scss'
import { Table } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
const cx = classNames.bind(Styles);
const columns = [
  {
    title: 'File',
    dataIndex: 'Name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Edit name',
    dataIndex: 'file',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Upload',
    dataIndex: 'upload',
   
    width: '20%',
  },
  {
    title: 'Download',
    dataIndex: 'email',
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const FirmWare  = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default FirmWare ;
