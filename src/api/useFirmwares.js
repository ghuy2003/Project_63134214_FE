import useRequest from './useRequest'


const useFirmware = () => {
	const { createGetRequest, createPostRequest, cancel } = useRequest('firmwares')


	const getFirms = ({curent,pageSize}) => createGetRequest({
		endpoint: '',
		params: {curent,pageSize}
	})
	const createFirm = ({ ID, Name, Description }) => createPostRequest({
		endpoint: 'create',
		data: {  ID, Name, Description }
	})
	const deleteFirm = (ID) => createPostRequest({
		endpoint: 'delete',
		data: ID
	})

	const deleteManyFirms = ({selectedRowKeys}) => createPostRequest({
		endpoint: 'deletes',
		data: selectedRowKeys
	})

	const updateFirm = ({ID,Name,Description }) => createPostRequest({
		endpoint: 'update',
		data: {ID, Name,Description }
	})

	const uploadFile = (formData) => createPostRequest({
		endpoint: 'upload',
		data: formData
	})
	return {
		getFirms,
		createFirm,
		deleteFirm,
		deleteManyFirms,
		updateFirm,
		uploadFile,
		cancel
	}
}


export default useFirmware

