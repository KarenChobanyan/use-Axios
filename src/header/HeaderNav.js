import { useContext } from "react"
import { HeaderNavContext } from "../contexts/headerNavContext"

export default ({text})=>{
    const [headerNavContext,setHeaderNavState] = useContext(HeaderNavContext)
    return(
        <button className={headerNavContext == text?"checkedHederNav":"headerNav"} onClick={()=>setHeaderNavState(text)}>{text}</button>
    )
}