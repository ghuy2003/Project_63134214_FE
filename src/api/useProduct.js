import useRequest from './useRequest'
const useProduct = () => {
	const { createPostRequest, cancel } = useRequest('Product')
	const getAll = (data) => createPostRequest({
		endpoint: '/getall',
		data: data
	})
    const getAllById = (id) => createPostRequest({
		endpoint: '/getall',
		data: id
	})
	const register = (data) => createPostRequest({
		endpoint: '/register',
		data: data
	})

	return {
		getAll,
		register,
		cancel
	}
}

export default useProduct