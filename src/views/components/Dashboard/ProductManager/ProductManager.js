import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import useProduct from '@api/useProduct';
import { toast } from 'react-toastify';


const columns = [
    {
        title: 'Name',
        dataIndex: 'productName',
        key: 'productName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'prodcutPrice',
        key: 'prodcutPrice',
    },
    {
        title: 'Number',
        dataIndex: 'productNumber',
        key: 'productNumber',
    },

    {
        title: 'BranchName',
        dataIndex: 'branchName',
        key: 'branchName',
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
    },
    {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //     <>
    //         {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //             color = 'volcano';
    //         }
    //         return (
    //             <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //             </Tag>
    //         );
    //         })}
    //     </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
        <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
        </Space>
        ),
    },
    ];



function ProductManager() {


    const { getAll } = useProduct()

    const [product, setProduct] = useState([])

    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
      pagination: {
        pageIndex: 1,
        pageSize: 10,
      },
    });


    




    const fetchData = async () => {
        const {success,data} = await getAll(tableParams.pagination);
        if(!success || data.status == 'Error') {
            toast.error('Có lỗi xảy ra')
        } else {
            setProduct(data.data.items)
            setLoading(false);
            setTableParams({
                ...tableParams,
                pagination: {
                  ...tableParams.pagination,
                },
                total: data.totalCount,
            })

        }
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(tableParams)])


    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
          setProduct([]);
        }
      };


    
    return ( 
        <>
            <Table 
                dataSource={product} columns={columns}     
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
        </> 
    );
}

export default ProductManager;