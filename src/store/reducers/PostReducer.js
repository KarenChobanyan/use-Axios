import { SET_POSTS } from "../types/posttypes";
const INIT_STATE = []
export default (state=INIT_STATE,action)=>{
    const {type,payload} = action 
    switch (type) {
        case SET_POSTS:
            return [...state,payload];
    }
    return state
}