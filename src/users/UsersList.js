import { useContext, useEffect, useState } from "react"
import { API } from "../services/api"
import UserBox from "./UserBox"
import { HeaderNavContext } from "../contexts/headerNavContext"
import { Outlet } from "react-router-dom"

export default () => {
    const [, setHeaderNavState] = useContext(HeaderNavContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        setHeaderNavState("Users")
        API.get("/users").then((responce) => {
            let usersList = responce.data
            setUsers(usersList)
        })
    }, [])
    return (
        <>
        <div className="usersList">
        <Outlet></Outlet>
            {users.map((el, index) =>
            <UserBox
             key={el.lng}
             name={el.name}
             nickName= {el.username}
             email = {el.email}
             phone= {el.phone}
             webSite ={el.website}
             id={el.id}
              />)}
        </div>
        </>
    )
}