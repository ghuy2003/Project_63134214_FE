import useRequest from './useRequest'

const useAuth = () => {
    const { createPostRequest, cancel } = useRequest('dashboard')

    const login = ({ username, password }) => createPostRequest({
        endpoint: 'auth/login',
        data: { username, password }
    })

    return {
        login,
        cancel
    }
}

export default useAuth