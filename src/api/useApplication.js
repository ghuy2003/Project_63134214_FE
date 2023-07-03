import useRequest from './useRequest'


const useApplication = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('applications')


	const getApplication = () => createGetRequest({
		endpoint: '',
	})
	const createApplication = ({ ID, Name, FirmID, Version, Description }) => createPostRequest({
		endpoint: 'create',
		data: { ID, Name, FirmID, Version, Description}
	})
	const deleteApplication = (ID) => createPostRequest({
		endpoint: 'delete',
		data: ID
	})

	const deleteManyApplication = ({selectedRowKeys}) => createPostRequest({
		endpoint: 'deletes',
		data: selectedRowKeys
	})

	const updateApp = ({ID, Name, FirmID, Version ,Description }) => createPostRequest({
		endpoint: 'update',
		data: {ID, Name, FirmID, Version ,Description}
	})

	return {
		getApplication,
		createApplication,
		deleteApplication,
		deleteManyApplication,
		updateApp,
		cancel
	}
}


export default useApplication

