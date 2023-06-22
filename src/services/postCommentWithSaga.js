import { API } from "./api"

export default (comment)=>{
    API.post("/comments",comment)
}