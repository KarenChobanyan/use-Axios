import { call, put } from "redux-saga/effects";
import getDataForSaga from "../../../services/getDataForSaga";
import { setPosts } from "../../actions/postActions";

export default function* postWorkerSaga(action) {
    try {
        const posts = yield call(getDataForSaga, action.payload.path)
        yield put(setPosts(posts.data))
    } catch (error) {
        console.log(error);
    }
}