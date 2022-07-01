import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import PostApi from "../api/postApi/PostApi"
export const showPostList = createAsyncThunk("posts/getPostList", async () => {
  let res = await PostApi.getPostList()
  return res.data
})
const postSlice = createSlice({
  name:"posts",
  initialState:{
    posts:[]
  },
  reducers:{},
  extraReducers:{
   [showPostList.pending]:(state) => {
     state.loading = true
   },
   [showPostList.fulfilled]:(state, action) => {
     state.posts = action.payload
     state.loading = false
   },
   [showPostList.rejected]:(state, action) => {
     state.error = action.error
     state.loading = false
   }
  }
})
export default postSlice.reducer