import { data } from 'jquery'
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
	const createProduct  = (data) => createPostRequest({
		endpoint: 'create',
		data: data
	})
	return {
		getAll,
		getBestSale,
        getAllById,
		createProduct
	}
}

export default useProduct