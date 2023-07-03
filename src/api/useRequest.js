import { useEffect, useState, useCallback } from 'react'
import useUSer from '@store/useUser'
import axios from 'axios'
import useHandleError from './useHandleError'
import { isFunction } from '@utils/checkType'
import useTranslate from '@lang'
import { message as antdMessage } from 'antd'
import { PROTOCOL, HOST, PORT } from '@configs/app.config'

const useRequest = (prefixPath = '') => {
	const t = useTranslate()
	const { token } = useUSer()
	const handleError = useHandleError()
	const [controller, setController] = useState(new AbortController())

	const createRequest = () => axios.create({
		// baseURL: `${PROTOCOL}://${HOST}:${PORT}/api/${prefixPath}`, // run on local
		baseURL: `${PROTOCOL}://${HOST}/api/${prefixPath}`, // deloy on server
		timeout: 5000,
		headers: {
			Accept: 'application/json',
			Authorization: token
		},
		signal: controller.signal
	})
	const [request, setRequest] = useState(() => createRequest())
	const createGetRequest = useCallback(({ endpoint, params, headers, successCallback }) => {
		return (
			request
				.get(endpoint, { params, headers })
				.then(res => {
					if(isFunction(successCallback)) successCallback()
					return {
						success: true,
						data: res.data
					}
				})
				.catch(err => {
					const data = handleError(err)
					return {
						success: false,
						data
					}
				})
				.finally(() => {})
		)
	}, [request, t])

	const createPostRequest = useCallback(({ endpoint, data, ...props }) => {
		console.log(data)
		return ( 
			request
				.post(endpoint, data, { ...props })
				.then(res => {
					const { data } = res
					const { message } = data
					message && antdMessage.success(t(message))
					return {
						success: true,
						data
					}
				})
				.catch(err => {
					const data = handleError(err)
					return {
						success: false,
						data
					}
				})
				.finally(() => {})
		)
	}, [request, t])

	const cancel = () => {
		controller.abort()
		setController(new AbortController())
	}

	useEffect(() => {
		setRequest(() => createRequest())
	}, [controller])

	return {
		request,
		createGetRequest,
		createPostRequest,
		cancel
	}
}

export default useRequest