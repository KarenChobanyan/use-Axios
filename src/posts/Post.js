import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCommnets } from "../store/actions/commentActions"
import { getUsers } from "../store/actions/userActions"
import { commentsSelector, usersSelector } from "../store/selectors"



export default (props) => {
    const { userID, title, postText, postId, } = props;
    const [postAuthor, setPostAuthor] = useState({});
    const [currentPostComments, setCurrentComments] = useState([]);
    const users = useSelector(usersSelector);
    const comments = useSelector(commentsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (comments.length == 0) {
            dispatch(getCommnets())
        } else {
            const tmp = comments.filter((el) => el.postId == postId)
            setCurrentComments(tmp)

        }
    }, [comments]);


    useEffect(() => {
        if (users.length == 0) {
            dispatch(getUsers())
        } else {
            const tmp = users.filter((el) => el.id == userID)[0]
            setPostAuthor(tmp)
        }
    }, [users]);




    return (
        <>
            <div className="postDiv">
                <Link to={`user/${userID}`}>
                    <div className="postAutorName">{postAuthor.name}</div>
                </Link>
                <div className="postTitle">{title}</div>
                <div className="post">{postText}</div>
                <div className="postCommentDiv">
                    <Link to={`${postId}/comments`} style={{ textDecoration: "none" }}>
                        <div className="postCommentLine">
                            <div className="commentLogo"></div>
                            <button className="textForComentLogo">Comments: {currentPostComments.length}</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}