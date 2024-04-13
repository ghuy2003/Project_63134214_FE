import useRequest from './useRequest'

const useAuth = () => {
	const { createPostRequest, cancel } = useRequest('User')
	const login = ({ UserName, Password }) => createPostRequest({
		endpoint: '/login',
		data: {UserName,Password }
	})
	const register = ({ UserName, Password, Email }) => createPostRequest({
		endpoint: '/register',
		data: {UserName,Password }
	})

	return {
		login,
		register,
		cancel
	}
}

export default useAuth