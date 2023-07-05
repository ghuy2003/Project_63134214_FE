import React, { useEffect, useState, useCallback } from 'react'
import useUser from '@store/useUser'
import useRoutes from '@configs/useRoutes.config'
import { isArray } from '@utils/checkType'

import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import AppContext from '@context/AppContext'

const App = () => {
	const navigate = useNavigate()
	const { routes } = useRoutes()
	const { token } = useUser()
	const [ready, setReady] = useState(false) // set after

	const renderRoute = (routes) => routes.map(route => (
		'children' in route ?
			<Route {...route}>{renderRoute(route.children)}</Route> :
			<Route {...route} />
	))
	useEffect(() => {
		token ? setReady(true) : navigate('/login')
		setReady(true)
	}, [])
	return (
		<>
			{ready && (
				<AppContext.Provider value={{}}>
					<Routes>
						{renderRoute(routes)}
					</Routes>
				</AppContext.Provider>
			)}
		</>
	)
}

export default () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)