import { call, put, takeEvery } from 'redux-saga/effects';
import { exampleRequest } from "../../requests/example.request";
import { getExampleSuccess, getExampleFailure } from "../actions/example.action";
import { EXAMPLE_REQUEST } from "../constants/example.constant";

export default function* exampleSaga() {
  yield takeEvery(EXAMPLE_REQUEST, function*({ data }) {
    const response = yield call(exampleRequest, data);
    if(response) {
      yield put(getExampleSuccess(response));
    } else {
      yield put(getExampleFailure(response.error));
    }
  });
}