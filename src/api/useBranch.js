import useRequest from "./useRequest"
const useBranch = () => {
    const {createPostRequest,createGetRequest} = useRequest('Branch');
    const getBranch = async (data) => createPostRequest({
        endpoint: '/getall',
        data: data
    })
    return {
        getBranch
    }
}
export default useBranch