import { combineReducers } from "redux";
import homePageReducer, {
  ROOT_STATE_NAME as HOME_PAGE,
} from "../slice/homePage";

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [HOME_PAGE]: homePageReducer,
  });
  return rootReducer;
}
