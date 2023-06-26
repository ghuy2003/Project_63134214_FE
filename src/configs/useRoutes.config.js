import React from 'react'
import useTranslate from '@lang'

import Layout from '@views/layouts/Layout'
import Login from '@views/Login'
import Home from '@views/Home'
import ManagerDevice from '@components/ManagerDevice/ManagerDevice'
import FirmWare from '@components/FirmWare/FirmWare'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { ContainerOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons'

const ICON_SIZE = '15px'

const useRoutes = () => {
	const t = useTranslate()

	const publicRoutes = [
		{
			key: '/dashboard',
			label: t('dashboard').toCapitalize(),
			path: '/',
			icon: <PieChartOutlined style={{ fontSize: ICON_SIZE }} />,
			element: <Layout><Home /></Layout>
		},
		{
			key: '/devices',
			label: t('devices management').toCapitalize(),
			path: '/devices',
			icon: <DesktopOutlined style={{ fontSize: ICON_SIZE }} />,
			element: <Layout><ManagerDevice /></Layout>
		},
		{
			key: '/applications',
			label: t('applications management').toCapitalize(),
			path: '/applications',
			icon: <ContainerOutlined style={{ fontSize: ICON_SIZE }} />,
			element: <Layout><FirmWare /></Layout>
		},
		{
			key: '/firmware',
			label: t('firmware management').toCapitalize(),
			path: '/firmware',
			icon: <ContainerOutlined style={{ fontSize: ICON_SIZE }} />,
			element: <Layout><FirmWare /></Layout>
		}
	]

	const privateRoutes = [
		{
			key: '/login',
			label: 'login',
			path: '/login',
			element: <Login />
		},
		{
			key: '/devices',
			label: 'devices',
			path: '/devices',
			element: <Login />
		},
	]

	return {
		publicRoutes,
		privateRoutes,
		routes: [...publicRoutes, ...privateRoutes]
	}
}

export default useRoutes