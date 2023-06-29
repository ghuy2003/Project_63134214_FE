import useRequest from './useRequest'


const useApplication = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('applications')


	const getApplication = () => createGetRequest({
		endpoint: '',
	})
	const createDevice = ({ ID, Mac, Name, ApplicationID, Description }) => createPostRequest({
		endpoint: 'create',
		data: {  ID, Mac, Name, ApplicationID ,Description }
	})
	return {
		getApplication,
		createDevice,
		cancel
	}
}


export default useApplication

