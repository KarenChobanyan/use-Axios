import { useContext, useEffect } from "react"
import { HeaderNavContext } from "../contexts/headerNavContext"

export default ()=>{
    const [,setHeaderNavState] = useContext(HeaderNavContext)
    useEffect(()=>{
        setHeaderNavState("Main")
    })
    return(
        <div className="main">
            <div className="mainTitle">Making HTTP requests with Axios</div>
            <div className="mainImageDiv">
                <div className="mainImage"></div>
            </div>
        </div>
    )
}