import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as types from '../actions/ActionTypes.js';
import GithubHelpers from '../services/api.js';

function* fetchData(action) {
   try {
     console.log("passeFetchData");
     const data = yield call(GithubHelpers.getManinthemiddleInfos);
     yield put({type: types.PING_BUTTON_OK, data: data.data.next});
   } catch (e) {
     console.log("failed api");
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }

}

function* fetchManInthemiddle(action) {
   try {
     console.log("Saga qui fait le call API, puis envoie les données au réducer");
     const data = yield call(GithubHelpers.getManinthemiddleInfos);
     yield put({type: types.PING_MANINTHEMIDDLE_OK, data: data.data.results, isData:true});
   } catch (e) {
     console.log("failed api");
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

// On passe une fois.
export function* mySaga(){
  yield* takeEvery(types.PING_MANINTHEMIDDLE,fetchManInthemiddle)
}
