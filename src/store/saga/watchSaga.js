import { takeEvery, takeLeading}  from "redux-saga/effects"
import { GET_POSTS } from "../types/posttypes"
import postWorkerSaga from "./PostWorkers/setPostsSaga"
import { GET_COMMENTS, POST_COMMENT } from "../types/commentTypes";
import { commentWorkerSaga } from "./CommentWorkers/setCommentsSaga";
import postCommentSaga from "./CommentWorkers/postCommentsSaga";
import { GET_USERS } from "../types/userTypes";
import setUserWorkerSaga from "./UserWorker.js/setUsersSaga";

export default function* WatcherSaga(){
    yield takeLeading(GET_POSTS,postWorkerSaga);
    yield takeLeading(GET_COMMENTS,commentWorkerSaga)
    yield takeEvery(POST_COMMENT,postCommentSaga)
    yield takeLeading(GET_USERS,setUserWorkerSaga)

}