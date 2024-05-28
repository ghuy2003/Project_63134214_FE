import useRequest from './useRequest'

const useAuth = () => {
	const { createPostRequest,createPutRequest, cancel } = useRequest('User')
	const login = ({ UserName, Password }) => createPostRequest({
		endpoint: '/login',
		data: {UserName,Password }
	})
	const register = (data) => createPostRequest({
		endpoint: '/register',
		data: data
	})
	const changpassWord = (data) => createPutRequest({
		endpoint: '/changePass',
		data: data
	})

	
	return {
		login,
		register,
		cancel,
		 changpassWord
	}
}

export default useAuth