import useRequest from './useRequest'

const useAuth = () => {
	const { createPostRequest,createPutRequest,createGetRequest, cancel } = useRequest('User')
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


	const getUser = (data) => createPostRequest({
		endpoint: '/getUser',
		data: data
	})


	
	return {
		login,
		register,
		cancel,
		changpassWord,
		getUser
	}
}

export default useAuth