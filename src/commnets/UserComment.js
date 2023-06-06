export default (props) => {
    const { userEmail, comment } = props
    return (
        <div className="userCommentDiv">
            <div className="userEmail">{userEmail}</div>
            <div className="commentBody">{comment}</div>
        </div>
    )
}