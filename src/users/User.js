import { Link, useParams } from "react-router-dom"
import UserInfoText from "./UserInfoText"
import { useEffect, useState } from "react"
import UserOtherInfo from "./UserOtherInfo"
import UserOtherInfoText from "./UserOtherInfoText"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/actions/userActions"
import { usersSelector } from "../store/selectors"

export default (props) => {
    const { path } = props;
    const { id } = useParams();
    const users = useSelector(usersSelector);
    const dispatch = useDispatch()
    const [currentUser, setCurrentUser] = useState([]);
    const [userAddress, setUserAddress] = useState({});
    const [userCompany, setUserCompany] = useState({});

    useEffect(() => {
        if (users.length == 0) {
            dispatch(getUsers())
        } else {
            const tmp = users.filter((el) => el.id == id)[0]
            setCurrentUser(tmp)
            setUserAddress(tmp.address)
            setUserCompany(tmp.company)
        }
    }, [users]);


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
                        <UserOtherInfoText text={`street: ${userAddress.street}`} />
                        <UserOtherInfoText text={`suite: ${userAddress.suite}`} />
                        <UserOtherInfoText text={`zipcode: ${userAddress.zipcode}`} />

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
