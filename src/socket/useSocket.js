import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { PORT } from '@configs/app.config'
// import { useStore } from 'zustand/react'
import useUser from '@store/useUser'

const useSocket = () => {
	// const usetoken = useStore(state => 
	// 	state.token
	// )
	const {token} = useUser()
	// console.log(token)
	console.log(window.location.hostname)
	const socket = useMemo(() => {
		return io(
			// `${window.location.protocol}//${window.location.hostname}:${PORT}`,
			`${window.location.protocol}//${window.location.hostname}:${PORT}`,
			{
				extraHeaders: { token }
			}
		)
	}, [])

	return socket
}

export default useSocket