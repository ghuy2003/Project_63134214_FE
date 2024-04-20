import useRequest from "./useRequest";

const useOrigin = () => {
  const { createPostRequest, createGetRequest } = useRequest("Origin");
  const getOrigin = async (data) =>
    createPostRequest({
      endpoint: "/getall",
      data: data,
    });
  return {
    getOrigin,
  };
};
export default useOrigin;
