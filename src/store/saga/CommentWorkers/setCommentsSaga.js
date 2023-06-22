import { call, put } from "redux-saga/effects";
import getDataForSaga from "../../../services/getDataForSaga";
import { setComments } from "../../actions/commentActions";

function* commentWorkerSaga(action) {
    try {
        const comments = yield call(getDataForSaga, action.payload.path)
        yield put(setComments(comments.data))
    } catch (error) {
        console.log(error);
    }
}

export {
    commentWorkerSaga
}