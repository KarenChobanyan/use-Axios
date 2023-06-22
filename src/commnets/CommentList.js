import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import UserComment from "./UserComment"
import MyComment from "./MyComment"
import { useDispatch, useSelector } from "react-redux"
import { postComment } from "../store/actions/commentActions"
import { commentsSelector } from "../store/selectors"

export default () => {
    const data = useSelector(commentsSelector)
    if (data.length !== 0) {
        const { id } = useParams()
        const comments = useSelector(state => state.comments.filter((el) => el.postId == id))
        const dispatch = useDispatch()
        const [myComment, setMyComment] = useState(comments.filter((el) => el.auth == "user"))
        const commentRef = useRef()

        // const MyCommentList = useMemo(()=>{
        //     return myComment
        // },[myComment]);

        const clickHendler = useCallback(() => {
            let newComment = {
                email: "karen.ysu7@mail.ru",
                body: commentRef.current.value,
                postId: id,
                auth: "user"
            }
            newComment.body && dispatch(postComment(newComment))
            let tmp = myComment
            tmp.push(newComment)
            setMyComment(tmp)
            commentRef.current.value = ""
        }, [])

        return (
            <div className="commentMianDiv">
                <div className="commentList">
                    <div className="closeCommentList">
                        <Link to={'/posts'}>
                            <div className="closeButton"></div>
                        </Link>
                    </div>
                    <div className="commentArea">
                        {comments.length && comments.filter((el) => el.auth !== "user").map((el, index) => <UserComment userEmail={el.email} key={el.id + index} comment={el.body} />)}
                        {myComment ? myComment.map((el, index) => <MyComment myEmail={el.email} comment={el.body} key={index + el.email} />) : null}
                    </div>
                    <div className="addComentDiv">
                        <textarea
                            ref={commentRef} className="textarea"></textarea>
                        <button type="submit" className="addCommentButton" onClick={clickHendler}>Add comment</button>
                    </div>
                </div>
            </div>
        )
    }

}