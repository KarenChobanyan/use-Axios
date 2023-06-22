import { call, put } from "redux-saga/effects";
import postCommentWithSaga from "../../../services/postCommentWithSaga";
import { addComment } from "../../actions/commentActions";

export default function* postCommentSaga(action){
    try {
       yield call(postCommentWithSaga,action.payload) 
       yield put(addComment(action.payload))
    } catch (error) {
        console.log(error);
    }
}