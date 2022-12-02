import { call, put, delay, takeLatest } from "redux-saga/effects";
import { ROOM_LIST } from "../constants/path";

import { getData } from "../services/api";
import {
  getRoomListSuccess,
  getRoomListFailure,
  getRoomListRequest,
} from "../slice/homePage";

export function* getRoomList() {
  try {
    const {
      data: { content },
    } = yield call(getData, { url: ROOM_LIST });

    yield delay(800);
    yield put(getRoomListSuccess(content));
  } catch (error) {
    const { message = "Oops! Somthing went wrong!" } = error;

    yield put(getRoomListFailure(message));
  }
}

export default function* homePageSaga() {
  yield takeLatest(getRoomListRequest().type, getRoomList);
}
