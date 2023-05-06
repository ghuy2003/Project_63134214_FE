import useTranslate from '@lang'

import Layout from '@views/layouts/Layout'
import Login from '@views/Login'
import Home from '@views/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faHome, faGear, faUserCog } from '@fortawesome/free-solid-svg-icons'

const ICON_SIZE = '15px'

const useRoutes = () => {
    const t = useTranslate()

    const publicRoutes = [
        {
            key: '/',
            label: t('home').toCapitalize(),
            path: '/',
            element: <Layout><Home /></Layout>,
            icon: <FontAwesomeIcon icon={faHome} style={{ fontSize: ICON_SIZE }} />
        },
    ]
    
    const privateRoutes = [
        {
            key: '/login',
            label: 'login',
            path: '/login',
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