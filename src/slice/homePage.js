import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const ROOT_STATE_NAME = "homePage";
const initialState = {
  roomList: {
    data: {},
    status: "idle",
    error: null,
  },
};

const homePageSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducer: {
    getRoomListRequest(state) {
      state.roomList.status = "loading";
    },
    getRoomListSuccess(state, action) {
      state.roomList.data = action.payload;
      state.roomList.status = "succeeded";
    },
    getRoomListFailure(state, action) {
      state.roomList.status = "failed";
      state.roomList.data = {};
      state.roomList.error = action.payload;
    },
  },
});

const { actions, reducer } = homePageSlice;

export default reducer;

export const { getRoomListRequest, getRoomListSuccess, getRoomListFailure } =
  actions;

export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};

export const homePageSelector = createSelector(
  rootSelector,
  ({ roomList }) => roomList
);
