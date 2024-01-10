import store from "./redux/store.js";
import { addCurrentTime, clearAllTimes } from "./redux/actionCreators.js";

const addTimeBtn = document.getElementById("addTime");

addTimeBtn.addEventListener("click", () => store.dispatch(addCurrentTime()));

const timeList = document.getElementById("timesList");

store.subscribe(() => {
  const times = store.getState();

  timeList.innerHTML = "";

  times.forEach((time) => {
    let li = document.createElement("li");
    li.innerText = time;
    timeList.appendChild(li);
  });
});

const clearTimeBtn = document.getElementById("clearTime");

clearTimeBtn.addEventListener("click", () => {
  store.dispatch(clearAllTimes());
});

// ======================================================================

// const unSubscribe = store.subscribe(()=> console.log(`Redux store just changed! ${store.getState()}`))

// store.dispatch({
// 	type: "ADD_CURRENT_TIME",
// 	payload: "11:30"
// })

// unSubscribe()

// store.dispatch({
// 	type: "ADD_CURRENT_TIME",
// 	payload: "11:32"
// })

// store.dispatch({
// 	type: "CLEAR_ALL_TIMES"
// })
