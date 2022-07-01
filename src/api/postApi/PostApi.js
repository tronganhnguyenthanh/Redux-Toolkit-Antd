import axiosConfig from "../configAxios"
const PostApi = {
  getPostList:() => {
   return axiosConfig.get("posts")
 }
}

export default PostApi