import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import routes from "./routes";

import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        ))}
      </Routes>
    </>
  );
};

export default memo(App);
