import useRequest from "./useRequest"
const useBranch = () => {
    const {createPostRequest,createGetRequest} = useRequest('Branch');
    const getBranch = async (data) => createPostRequest({
        endpoint: '/getall',
        data: data
    })
    const getAllBranch = async (data) => createPostRequest({
        endpoint: '/get',
        data: data
    })
    return {
        getBranch,
        getAllBranch
    }
}
export default useBranch