import useRequest from "./useRequest"


const useFirmware = () => {
    const { createGetRequest, createPostRequest, cancel } = useRequest('firmwares')


    const getFirms = () => createGetRequest({
        endpoint: '',
    })
    const createDevice = ({ ID, Mac, Name, ApplicationID, Description }) => createPostRequest({
        endpoint: 'create',
        data: {  ID, Mac, Name, ApplicationID ,Description }
    })
    return {
        getFirms,
        createDevice,
        cancel
    }
}


export default useFirmware

