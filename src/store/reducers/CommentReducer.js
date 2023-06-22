import { ADD_COMMENT, SET_COMMENTS } from "../types/commentTypes";

const INIT_STATE = []

export default (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_COMMENTS:
            return payload
            case ADD_COMMENT:
                return [...state,payload]

    }
    return state
}