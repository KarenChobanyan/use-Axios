import { useContext, useEffect, useState } from "react"
import { API } from "../services/api"
import { HeaderNavContext } from "../contexts/headerNavContext"
import Post from "./Post"
import { Outlet } from "react-router-dom"
import { useCallback } from "react"

export default () => {
    const [, setHeaderNavState] = useContext(HeaderNavContext)
    const [dataState, setDataState] = useState([])

    // const setCommentsNum = useCallback((id)=>{
    //     let currentPost
    //     API.get("/comments").then((responce) => {
    //         currentPost = responce.data.filter((el) => el.postId == id)
    //     }).finally(()=>{
    //         // console.log(currentPost.length);
    //         return currentPost.length 
    //     })
    // },[])

     
    useEffect(() => {
        setHeaderNavState("Posts")
        API.get('/posts').then((responce) => {
            setDataState(responce.data)
            // console.log(responce.data);
        })
    }, [])
    return (
        <div className="postList">
            <Outlet></Outlet>
            {dataState.map((el, index) =>
                <Post
                    key={el.id + index}
                    userID={el.userId}
                    title={el.title}
                    postText={el.body}
                    postId={el.id}
                    // commentsNum = {setCommentsNum(el.userId)}
                />
                )}
        </div>
    )
}