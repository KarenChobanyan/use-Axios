export default (props)=>{
    const {title,children} = props
    return(
        <div className="userOtherInfoDiv">
            <div className="userOtherInfoTitle">{title}</div>
            {children}
        </div>
    )
}