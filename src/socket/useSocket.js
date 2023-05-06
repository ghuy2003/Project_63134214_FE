import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

import { PORT } from '../configs/app.config'

const useSocket = () => {
    const token = useSelector(state => state.user.token)

    const socket = useMemo(() => {
        return io(
            `${window.location.protocol}//${window.location.hostname}:${PORT}`,
            {
                extraHeaders: { token }
            }
        )
    }, [token])

    return socket
}

export default useSocket