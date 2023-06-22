import { useContext, useEffect, useState } from "react"
import UserBox from "./UserBox"
import { HeaderNavContext } from "../contexts/headerNavContext"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/actions/userActions"
import { usersSelector } from "../store/selectors"

export default () => {
    const [, setHeaderNavState] = useContext(HeaderNavContext);
    const users = useSelector(usersSelector);
    const dispatch = useDispatch()
    useEffect(() => {
        if (users.length == 0) {
            dispatch(getUsers())
        }
        setHeaderNavState("Users")

    }, [users])
    return (
        <>
            <div className="usersList">
                <Outlet></Outlet>
                {users.map((el) =>
                    <UserBox
                        key={Math.random()}
                        name={el.name}
                        nickName={el.username}
                        email={el.email}
                        phone={el.phone}
                        webSite={el.website}
                        id={el.id}
                    />)}
            </div>
        </>
    )
}