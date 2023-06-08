import { Link } from "react-router-dom"
import UserInfoText from "./UserInfoText"

export default (props)=>{
    const {name,nickName,email,phone,webSite,id} = props
    return(
        <div className="userDiv">
            <div className="userAvatar"></div>
            <div className="userInfosheet">
                <div className="userName">{name}</div>
                <UserInfoText text={`User Name: ${nickName}`}/>
                <UserInfoText text={`Email: ${email}`}/>
                <UserInfoText text={`Phone: : ${phone}`}/>
                <UserInfoText text={`Website: ${webSite}`}/>
            </div>
            <div className="userSheetButtonDiv">
                <Link to={`user/${id}`}>
                <button className="userInfoButton">See more</button>
                </Link>
            </div>
        </div>
    )
}