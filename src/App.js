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
	const [ready, setReady] = useState(true) // set after

	const renderRoute = (routes) => routes.map(route => (
		'children' in route ?
			<Route {...route}>{renderRoute(route.children)}</Route> :
			<Route {...route} />
	))
<<<<<<< HEAD
	// useEffect(() => {
	// 	token ? setReady(true) : navigate('/login')
	// 	setReady(true)
	// }, [])
=======

	useEffect(() => {
		// token ? setReady(true) : navigate('/login')
		setReady(true)
	}, [])

>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69
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