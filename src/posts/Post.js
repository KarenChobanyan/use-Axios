import { useEffect, useState } from "react"
import { API } from "../services/api"
import { Link, Outlet } from "react-router-dom"

export default (props) => {
    const { userID, title, postText, postId, } = props
    const [postAuthor, setPostAuthor] = useState("")
    const [commentsNum, setCommentsNum] = useState()

    useEffect(() => {
        API.get("/comments").then((responce) => {
            let currentPost = responce.data.filter((el) => el.postId == postId)
            setCommentsNum(currentPost.length)
        })
    }, [commentsNum])

    useEffect(() => {
        API.get("/users").then((responce) => {
            let author = responce.data.filter((el) => el.id == userID)
            setPostAuthor(author[0]);
        })
    }, [])
    return (
        <>
        <div className="postDiv">
            <Link to={`user/${postAuthor.id}`}>
                <div className="postAutorName">{postAuthor.name}</div>
            </Link>
            <div className="postTitle">{title}</div>
            <div className="post">{postText}</div>
            <div className="postCommentDiv">
                <Link to={`${postId}/comments`} style={{textDecoration:"none"}}>
                    <div className="postCommentLine">
                    <div className="commentLogo"></div>
                    <button className="textForComentLogo">Comments: {commentsNum }</button>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}