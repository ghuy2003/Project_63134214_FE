import useTranslate from '@lang'
import Layout from '@views/layouts/Layout'
import Login from '@views/Login'
import Home from '@views/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ManagerDevice from '@components/ManagerDevice/ManagerDevice'
import FirmWare from '@components/FirmWare/FirmWare'
import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined
  } from '@ant-design/icons';
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
        }]}><FirmWare /></Layout>),
        getItem('Firmware Management', 'firmware', '/firmware', <ContainerOutlined />, <Layout data={[{
          label: t('firmware').toUpperFirst()
        }]}><FirmWare /></Layout>),
        // getItem('Navigation One', 'sub1', <MailOutlined />, [
        //   getItem('Option 5', '5'),
        //   getItem('Option 6', '6'),
        //   getItem('Option 7', '7'),
        //   getItem('Option 8', '8'),
        // ]),
        // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        //   getItem('Option 9', '9'),
        //   getItem('Option 10', '10'),
        //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        // ]),
      ];

    const publicRoutes = [
        ...items
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