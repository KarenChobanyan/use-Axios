import { useEffect, useState } from "react"
import { API } from "../services/api"
import { Link, Outlet } from "react-router-dom"

export default (props) => {
    const { userID, title, postText, postId } = props
    const [postAuthor, setPostAuthor] = useState("")
    const [commentsNum, setCommentsNum] = useState()

    useEffect(() => {
        API.get("/comments").then((responce) => {
            let currentPost = responce.data.filter((el) => el.postId == postId)
            setCommentsNum(currentPost.length)
        })
    }, [])

    useEffect(() => {
        API.get("/users").then((responce) => {
            let author = responce.data.filter((el) => el.id == userID)
            setPostAuthor(author[0]["name"]);
        })
    }, [])
    return (
        <div className="postDiv">
            <div className="postAutorName">{postAuthor}</div>
            <div className="postTitle">{title}</div>
            <div className="post">{postText}</div>
            <div className="postCommentDiv">
                <div className="commentLogo"></div>
                <Link to={`${postId}/comments`}>
                    <button className="textForComentLogo">Comments: {commentsNum}</button>
                </Link>
            </div>
        </div>
    )
}