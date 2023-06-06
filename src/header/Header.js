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
                    <HeaderNav text={"Users"} />
                    <HeaderNav text={"API"} />
                </div>
            </div>
        </div>
    )
}