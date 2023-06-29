import useRequest from './useRequest'


const useDevices = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('devices')


	const getDevices = () => createGetRequest({
		endpoint: '',
	})
	const createDevice = ({ ID, Mac, Name, ApplicationID, Description }) => createPostRequest({
		endpoint: 'create',
		data: {  ID, Mac, Name, ApplicationID ,Description }
	})
	return {
		getDevices,
		createDevice,
		cancel
	}
}


export default useDevices

