import useRequest from './useRequest'


const useApplication = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('applications')


	const getApplication = () => createGetRequest({
		endpoint: '',
	})
	const createApplication = ({ ID, Mac, Name, ApplicationID, Description }) => createPostRequest({
		endpoint: 'create',
		data: {  ID, Mac, Name, ApplicationID ,Description }
	})
	const deleteApplication = (ID) => createPostRequest({
		endpoint: 'delete',
		data: ID
	})

	const deleteManyApplication = ({selectedRowKeys}) => createPostRequest({
		endpoint: 'deletes',
		data: selectedRowKeys
	})

	const updateApp = ({ID, Mac, Name, ApplicationID ,Description }) => createPostRequest({
		endpoint: 'update',
		data: {ID, Mac, Name, ApplicationID ,Description }
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

