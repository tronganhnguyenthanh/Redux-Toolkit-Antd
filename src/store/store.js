import {configureStore} from "@reduxjs/toolkit"
import PostSlice from "../slice/PostSlice"
const store = configureStore({
  reducer:{
   post:PostSlice
  }
})
export default store