import useRequest from './useRequest'

const useAuth = () => {
	const { createPostRequest, cancel } = useRequest('User')
	const login = ({ UserName, Password }) => createPostRequest({
		endpoint: '/login',
		data: {UserName,Password }
	})
	const register = (data) => createPostRequest({
		endpoint: '/register',
		data: data
	})

	return {
		login,
		register,
		cancel
	}
}

export default useAuth