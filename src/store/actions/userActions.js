import { GET_USERS, SET_USERS } from "../types/userTypes"

const getUsers = ()=>{
    return {
        type:GET_USERS,
        payload:{
            path:"/users"
        }
    }
};

const setUsers = (payload)=>{
    return {
        type:SET_USERS,
        payload
    }
};

export {
    getUsers,
    setUsers
}