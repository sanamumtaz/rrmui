import { combineReducers } from "redux";

const wbReducer = (status = true, action) => {
  if (action.type === "WB_TOGGLE") {
    return !status;
  }

  return status;
};

const vidReducer = (status = false, action) => {
  if (action.type === "VID_TOGGLE") {
    return !status;
  }

  return status;
};

const fileReducer = (status = false, action) => {
  if (action.type === "FILE_TOGGLE") {
    return !status;
  }

  return status;
};
export default combineReducers({
  wbStatus: wbReducer,
  vidStatus: vidReducer,
  fileStatus: fileReducer
});
