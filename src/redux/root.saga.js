import { all } from "redux-saga/effects";
import exampleSaga from '../components/Home/redux/sagas/example.saga';

// main saga which includes others
export default function* rootSaga () {
  yield all([
    exampleSaga()
  ])
}