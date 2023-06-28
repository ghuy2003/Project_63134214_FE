import React from 'react'
import useTranslate from '@lang'

import Layout from '@views/layouts/Layout'
import Login from '@views/Login'
import Home from '@views/Home'
import ManagerDevice from '@components/ManagerDevice/ManagerDevice'
import FirmWare from '@components/FirmWare/FirmWare'
<<<<<<< HEAD
import {
    ContainerOutlined,
    PieChartOutlined,
    DesktopOutlined,
  } from '@ant-design/icons';
import Application from '@components/Applications/Applications'
const ICON_SIZE = '15px'

const useRoutes = () => {
    const t = useTranslate()
    function getItem(label, key, path, icon, element, type) {
        return {
          label,
          key,
          icon,
          path,
          element,
          type,
        
        };
      }
      const items = [
        getItem('Dashboard', 'dashboard', '/', <PieChartOutlined />, <Layout data={[
          { label: t('home').toUpperFirst() }
        ]}><Home /></Layout>, ),
        getItem('Devices Management', 'devices', '/devices', <DesktopOutlined />,<Layout data={[
          { label: t('devices').toUpperFirst() }
        ]}><ManagerDevice /></Layout> ),
        getItem('Applications Management', 'application', '/applications', <ContainerOutlined />, <Layout data={[{
          label: t('application').toUpperFirst()
        }]}><Application /></Layout>),
        getItem('Firmware Management', 'firmware', '/firmware', <ContainerOutlined />, <Layout data={[{
          label: t('firmware').toUpperFirst()
        }]}><FirmWare /></Layout>),
      ];
=======

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { ContainerOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons'

const ICON_SIZE = '15px'

const useRoutes = () => {
	const t = useTranslate()
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69

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