import useAuth from '@api/useAuth';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Select, Space, Table, Tag ,Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from '../assets/libs/bootstrap/js/dist/toast';

function UserManager() {
    const [user,setUsers] = useState([]);
    const {getUser} = useAuth()
    const columns = [
        {
            title: 'UserName',
            dataIndex: 'UserName',
            key: 'UserName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'PhoneNumber',
            dataIndex: 'PhoneNumber',
            key: 'PhoneNumber',
        },
        {
            title: 'Sold',
            dataIndex: 'productSold',
            key: 'productSold',
        },
        {

            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Link to={record.id}>
                        <Button type='primary' title='Detail Product'>
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </Button>
                    </Link>
                </Space>
            ),
        },
    ];
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState();
    const [tableParams, setTableParams] = useState({
      pagination: {
        pageIndex: 1,
        pageSize: 10,
      },
    });
    const handleUser = async () => {
        try {
            const {success,data} = await getUser(tableParams.pagination);
            if(success) {
                setUsers(data.data.items);
                toast.success(data.message);
            } else {
                toast.err(data != undefined ? data.message : "Server error")
            }
        } catch(err) {
            toast.err(err)
        }
    }

    
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
          setUsers([]);
        }
      };
    const onShowSizeChange = (current, pageSize) => {
        setTableParams({pagination: {
            pageIndex: current,
            pageSize: pageSize
        }})
    };

    useEffect(() => {
        handleUser()
    }, [])


    return (

        <>
            <Table 
            dataSource={user} columns={columns}     
            pagination={false}
            loading={loading}
            onChange={handleTableChange}
            />
            <Pagination  
                showSizeChanger
                onChange={onShowSizeChange} 
                style={{textAlign: 'center',marginTop: '1.5rem'}} 
                defaultCurrent={tableParams.pagination.pageIndex} 
                total={total} 
            />
        </>
) 
}

export default UserManager