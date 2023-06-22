import { call, put } from "redux-saga/effects";
import getDataForSaga from "../../../services/getDataForSaga";
import { setUsers } from "../../actions/userActions";

export default function* setUserWorkerSaga(action){
       try {
        const userList = yield call(getDataForSaga,action.payload.path)
        yield put(setUsers(userList.data))
       } catch (error) {
        console.log(error);
       }
}