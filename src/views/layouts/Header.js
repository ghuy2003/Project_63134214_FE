import React from 'react'
import useSider from '../../store/useSider'
import useUser from '../../store/useUser'
import useTranslate from '../../lang/useTranslate'
import { useNavigate } from 'react-router-dom'

import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Button, Row, Col, Avatar, Space, Typography, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import LangSelect from '../../components/LangSelect'

const { Text } = Typography

const Header = () => {
    const t = useTranslate()
    const navigate = useNavigate()
    const { toggle, isHide } = useSider()
    const { username } = useUser()

    const items = [
        {
            key: 1,
            label: t('logout').toCapitalize(),
            onClick: () => navigate('/login')
        }
    ]

    return (
        <Layout.Header
            style={{
                height: 'unset',
                lineHeight: 'unset',
                backgroundColor: '#fff',
                padding: 10,
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
                zIndex: 1
            }}
        >
            <Row
                gutter={10}
                justify='center'
                align='middle'
            >
                <Col span={8}>
                    <Space>
                        <Button
                            type='text'
                            onClick={toggle}
                            icon={isHide ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        />
                        <Avatar
                            shape='square'
                            size='small'
                            icon={<UserOutlined />}
                        />
                        <Dropdown
                            menu={{ items }}
                        >
                            <Space>
                                <Text>{username}</Text>
                                <DownOutlined style={{ fontSize: 10 }} />
                            </Space>
                        </Dropdown>
                    </Space>
                </Col>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <Row
                        gutter={10}
                        justify='end'
                        align='middle'
                    >
                        <Col>
                            <LangSelect />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default Header