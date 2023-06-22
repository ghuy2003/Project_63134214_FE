import React from 'react'
import { Layout as AntdLayout } from 'antd'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Sider from './Sider'
import Breadcrumb from '@components/Breadcrumb'

const Layout = ({ children, data }) => {
    return (
        <AntdLayout style={{ maxHeight: '100vh', minHeight: '100vh' }}>
			<Sider />
			<AntdLayout>
				<Header />
				<Body>
					<Breadcrumb data={data} />
                    {children}
                </Body>
				<Footer />
			</AntdLayout>
		</AntdLayout>
    )
}

export default Layout