import { useContext, useEffect } from "react"
import { HeaderNavContext } from "../contexts/headerNavContext"

export default ()=>{
    const [,setHeaderNavState] = useContext(HeaderNavContext)
    useEffect(()=>{
        setHeaderNavState("Main")
    })
    return(
        <div className="main">Main Page</div>
    )
}