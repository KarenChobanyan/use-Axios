import { SET_USERS } from "../types/userTypes";
const INIT_STATE = [];


export default (state=INIT_STATE,action)=>{
    const {type,payload} = action
    switch (type) {
        case SET_USERS:
            return payload
    }
    return state
}