import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomListRequest, homePageSelector } from "./../slice/homePage";

const useHomePage = () => {
  const roomList = useSelector(homePageSelector);
  const dispatch = useDispatch();
  const onGetRoomList = useCallback(
    (data) => dispatch(getRoomListRequest(data)),
    []
  );

  return { roomList, onGetRoomList };
};

export default useHomePage;
