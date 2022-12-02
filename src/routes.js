import { HOME, ROOM_LIST } from "./constants/breadCrumb";
import HomePage from "./pages/HomePage";
import RoomListPage from "./pages/RoomListPage";

const routes = [
  {
    path: HOME.href,
    component: <HomePage />,
    exact: true,
  },
  {
    path: ROOM_LIST.href,
    component: <RoomListPage />,
    exact: false,
  },
];

export default routes;
