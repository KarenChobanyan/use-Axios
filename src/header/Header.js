import { useContext } from "react"
import HeaderNav from "./HeaderNav"
import { HeaderNavContext } from "../contexts/headerNavContext"
import { Link } from "react-router-dom"

export default () => {
   
    return (
        <div className="headerDiv">
            <div className="header">
                <div className="headerLogo"></div>
                <div className="headerTitle">Using AXIOS with React to make API requests</div>
                <div className="headerNavDiv">
                    <Link to={"/"} >
                    <HeaderNav text={"Main"}/>
                    </Link>
                    <Link to ={'/posts'}>
                    <HeaderNav text={"Posts"}  />
                    </Link>
                    <Link to={'/usersList'}>
                    <HeaderNav text={"Users"} />
                    </Link>
                    <a href="https://jsonplaceholder.typicode.com/" target="blank" className="apiButton">
                    API
                    </a>
                </div>
            </div>
        </div>
    )
}