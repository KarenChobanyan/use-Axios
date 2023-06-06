export default (props) => {
    const { myEmail, comment } = props
    return (
        <div className="myCommentLine">
            <div className="myCommentDiv">
                <div className="myEmail">{myEmail}</div>
                <div className="commentBody">{comment}</div>
            </div>
        </div>
    )
}