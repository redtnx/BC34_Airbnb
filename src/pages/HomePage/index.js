import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import useHomePage from "../../hooks/useHomePage";

const HomePage = () => {
  const { roomList, onGetRoomList } = useHomePage();

  console.log(roomList);

  useEffect(() => {
    onGetRoomList();
  }, []);

  return <div className="AirbnbHome">HomePage</div>;
};

HomePage.propTypes = {};

export default memo(HomePage);
