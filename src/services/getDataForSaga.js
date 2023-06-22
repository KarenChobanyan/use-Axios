import { API } from "./api"

export default (path)=>{
   const result =  API.get(path).then(responce=>responce)
   return result
};
