
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataError } from './songAction';
import { addSong } from '../components/firestoreConfig'; 


function* fetchDataSaga() {
  try {
    const data = yield call(addSong); 
    yield put(fetchDataSuccess(data)); 
  } catch (error) {
    yield put(fetchDataError(error)); 
  }
}


function* watchFetchDataRequest() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga); 
}

export default function* rootSaga() {
  yield all([
    watchFetchDataRequest(),

  ]);
}
