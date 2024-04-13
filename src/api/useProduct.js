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
	return {
		getAll,
        getAllById
	}
}

export default useProduct