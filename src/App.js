import React, { useEffect, useState, useCallback } from 'react'
import useUser from './store/useUser'
import useRoutes from './configs/useRoutes.config'
import { isArray } from './utils/checkType'

import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import AppContext from './context/AppContext'

const App = () => {
	const navigate = useNavigate()
	const { routes } = useRoutes()
	const { token } = useUser()
	const [ready, setReady] = useState(false)

	const renderRoute = useCallback((routes) => {
		if (isArray(routes)) {
			return routes.map(route => {
				return (
					'children' in route ?
						<Route {...route}>{renderRoute(route.children)}</Route> :
						<Route {...route} />
				)
			})
		} else {
			throw new Error('Body: routes not an array')
		}
	}, [])

	useEffect(() => {
		// token ? setReady(true) : navigate('/login')
		setReady(true)
	}, [])

	return (
		<>{ready && (
			<AppContext.Provider value={{}}>
				<Routes>
					{renderRoute(routes)}
				</Routes>
			</AppContext.Provider>
		)}</>
	)
}

export default () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)