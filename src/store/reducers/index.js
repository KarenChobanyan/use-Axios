import CommentReducer from "./CommentReducer";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    posts:PostReducer,
    users:UserReducer,
    comments:CommentReducer,
    users:UserReducer
});

export {combinedReducers}