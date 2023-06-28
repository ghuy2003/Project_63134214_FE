import useRequest from './useRequest'

const useAuth = () => {
<<<<<<< HEAD
    const { createPostRequest, cancel } = useRequest()
    // const login = ({ username, password }) => createPostRequest({
    //     endpoint: 'auth/login',
    //     data: { username, password }
    // })
    return {
        // login,
        cancel
    }
=======
	const { createPostRequest, cancel } = useRequest()
	const login = ({ username, password }) => createPostRequest({
		endpoint: 'auth/login',
		data: { username, password }
	})
	return {
		login,
		cancel
	}
>>>>>>> 3e3a86623bf2c935d5c32704c25a64f3543f1c69
}

export default useAuth