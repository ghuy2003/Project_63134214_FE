import useRequest from './useRequest'


const useDevices = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('devices')

	const getDevices = () => createGetRequest({
		endpoint: '',
	})
	const createDevice = ({ ID, Mac, Name, ApplicationID, Description }) => createPostRequest({
		endpoint: 'create',
		data: {ID, Mac, Name, ApplicationID ,Description }
	})

	const deleteDevice = (ID) => createPostRequest({
		endpoint: 'delete',
		data: ID
	})

	const deleteManyDevice = ({selectedRowKeys}) => createPostRequest({
		endpoint: 'deletes',
		data: selectedRowKeys
	})

	const updateDevice = ({ID, Mac, Name, ApplicationID ,Description }) => createPostRequest({
		endpoint: 'update',
		data: {ID, Mac, Name, ApplicationID ,Description }
	})

	return {
		getDevices,
		createDevice,
		deleteDevice,
		deleteManyDevice,
		updateDevice,
		cancel
	}
}


export default useDevices

