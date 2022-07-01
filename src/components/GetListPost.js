import {Table} from "antd"
import React, {useEffect} from "react"
import {useDispatch, useSelector } from "react-redux"
import {showPostList} from "../slice/PostSlice"
const GetListPost = () => {
  const posts = useSelector((state) => state.post.posts)
  const loading = useSelector((state) => state.post.loading)
  const error = useSelector((state) => state.post.error)
  console.log(error)
  const dispatch = useDispatch()
  useEffect(() => {
   getPostList()
  },[])
  const getPostList = () => {
   dispatch(showPostList())
  }
  posts?.map((i, index) => {
   return(
    Array.from(posts)?.push({
      key:index,
      title:i.title,
      body:i.body
    })
   )
  })
  if(loading){
   return(
    <div className="image-loading">
      <img src="/images/loading.gif" alt=""/>
    </div>
   )
  }
  if(error){
   return(
    <h1></h1>
   )
  }
  const columns = [
   {
      title:"Title",
      dataIndex:"title",
      key:"title",
      align:"center"
   },
   {
      title:"Body",
      dataIndex:"body",
      key:"body",
      align:"center"
   }
  ]
  return (
    <>
      <Table
        columns={columns}
        dataSource={posts}
        pagination={false}
      />
    </>
  )
}
export default GetListPost
