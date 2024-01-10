import getCurrentTime from "../utils/getCurrentTime.js";
import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from "./actionsTypes.js";

export function addCurrentTime() {
  return {
    type: ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearAllTimes() {
  return {
    type: CLEAR_ALL_TIMES,
  };
}
