import useRequest from './useRequest'


const useDevices = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('devices')

	const getDevices = () => createGetRequest({
		endpoint: '',
	})
	const createDevice = ({ ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID }) => createPostRequest({
		endpoint: 'create',
		data: { ID, Mac,LocalIp, Name, ApplicationID, ODO, Description, StatusID}
	})

	const deleteDevice = (ID) => createPostRequest({
		endpoint: 'delete',
		data: ID
	})

	const deleteManyDevice = ({selectedRowKeys}) => createPostRequest({
		endpoint: 'deletes',
		data: selectedRowKeys
	})

	const updateDevice = ({ID, Mac, LocalIp, Name, ApplicationID , ODO ,Description, StatusID }) => createPostRequest({
		endpoint: 'update',
		data: {ID, Mac, LocalIp, Name, ApplicationID ,Description,ODO, StatusID }
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

