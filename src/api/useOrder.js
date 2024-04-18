import useRequest from './useRequest'

const useOrder = () => {
    const { createPostRequest, createGetRequest, cancel } = useRequest('Orders')

    const getAll = (data) => createPostRequest({
		endpoint: '/getall',
		data: data
	})
    const create = (data) => createPostRequest({
		endpoint: '/create',
		data: data
	})
	return {
		getAll,
		create
	}
} 
export default useOrder