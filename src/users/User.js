import { Link, useParams } from "react-router-dom"
import UserInfoText from "./UserInfoText"
import { useEffect, useState } from "react"
import { API } from "../services/api"
import UserOtherInfo from "./UserOtherInfo"
import UserOtherInfoText from "./UserOtherInfoText"

export default (props) => {
    const { path } = props
    const { id } = useParams()
    const [currentUser, setCurrentUser] = useState([])
    const [userAddress,setUserAddress] = useState({})
    const [userCompany,setUserCompany] = useState({})
    useEffect(() => {
        API.get("/users").then((responce) => {
            let data = responce.data.filter((el) => el.id == id)
            setCurrentUser(data[0])
            setUserAddress(data[0].address)
            setUserCompany(data[0].company)
        })
    }, [])
    return (
        <div className="userMainDiv">
            <div className="currnetUserFirstLne">
                <Link to={path}>
                    <div className="userPageCloseButton"></div>
                </Link>
            </div>
            <div className="currentUserInfoSheet">
                <div className="currentUserMainInfo">
                    <div className="userAvatar"></div>
                    <div className="userInfosheet">
                        <div className="userName">{currentUser.name}</div>
                        <UserInfoText text={`User Name: ${currentUser.username}`} />
                        <UserInfoText text={`Email: ${currentUser.email}`} />
                        <UserInfoText text={`Phone: ${currentUser.phone}`} />
                        <UserInfoText text={`Website: ${currentUser.website}`} />
                    </div>
                </div>
                <div className="currentUserOtherInfo">
                    <UserOtherInfo title="Address">
                        <UserOtherInfoText key={currentUser.phone} text={`city: ${userAddress.city}`} />
                        <UserOtherInfoText text={`street: ${userAddress.street}`}/>
                        <UserOtherInfoText text={`suite: ${userAddress.suite}`}/>
                        <UserOtherInfoText text={`zipcode: ${userAddress.zipcode}`}/>

                    </UserOtherInfo>
                    <UserOtherInfo title="Company">
                        <UserOtherInfoText text={`name: ${userCompany.name}`} />
                        <UserOtherInfoText text={`slogan: "${userCompany.catchPhrase}"`} />
                        <UserOtherInfoText text={`bs: ${userCompany.bs}`} />
                    </UserOtherInfo>
                </div>
            </div>
        </div>
    )
}