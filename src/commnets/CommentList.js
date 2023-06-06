import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API } from "../services/api"
import UserComment from "./UserComment"
import MyComment from "./MyComment"

export default () => {
    const { id } = useParams()
    const [comments, setComments] = useState([])
    const [myComment, setMyComment] = useState([])
    const commentRef = useRef()
    useEffect(() => {
        API.get("/comments").then((responce) => {
            let currentPostComments = responce.data.filter((el) => {
                return el.postId == id
            })
            setComments(currentPostComments)
        })
    }, []);

    function clickHendler() {
        let newComment = {
            email: "karen.ysu7@mail.ru",
            body: commentRef.current.value
        }
        API.post("/comments", newComment)
        setMyComment([...myComment, newComment])
        commentRef.current.value = ""
    }
    return (
        <div className="commentMianDiv">
            <div className="commentList">
                <div className="closeCommentList">
                    <Link to={'/posts'}>
                        <div className="closeButton"></div>
                    </Link>
                </div>
                <div className="commentArea">
                    {comments.map((el, index) => <UserComment userEmail={el.email} key={el.id} comment={el.body} />)}
                    {myComment ? myComment.map((el) => <MyComment myEmail={el.email} comment={el.body} key={el.body} />) : null}
                </div>
                <div className="addComentDiv">
                    <textarea
                        ref={commentRef} className="textarea"></textarea>
                    <button className="addCommentButton" onClick={clickHendler}>Add comment</button>
                </div>
            </div>
        </div>
    )
}