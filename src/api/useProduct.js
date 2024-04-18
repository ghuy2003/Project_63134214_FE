import useRequest from './useRequest'
const useProduct = () => {
	const { createPostRequest, createGetRequest, cancel } = useRequest('Product')
	const getAll = (data) => createPostRequest({
		endpoint: '/getall',
		data: data
	})
    const getAllById = (id) => createGetRequest({
		endpoint: '/find-by-id',
		params: {id: id}
	})
    const getBestSale = () => createGetRequest({
		endpoint: '/getBestSale',
		params: null
	})
	return {
		getAll,
		getBestSale,
        getAllById
	}
}

export default useProduct