const initialState = [];

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NAME":
      return [...state, payload];
    case "DELETE_NAME":
      return state.filter((personName) => personName !== payload);
    case "CLEAR_NAMES":
      return [];
    default:
      return state;
  }

  // 	if (action.type === "ADD_NAME") {
  //     return [...state, action.payload];
  //   }
  //   if (action.type === "DELETE_NAME") {
  //     return state.filter((personName) => personName !== action.payload);
  //   }
  //   if (action.type === "CLEAR_NAMES") {
  //     return [];
  //   }

  //   return state;
}

let newState = reducer(initialState, { type: "ADD_NAME", payload: "Anton" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Masha" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Pasha" });
console.log(newState);

newState = reducer(newState, { type: "DELETE_NAME", payload: "Anton" });
console.log(newState);

newState = reducer(newState, { type: "CLEAR_NAMES" });
console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Lena" });
newState = reducer(newState, { type: "ADD_NAME", payload: "Roma" });
console.log(newState);

newState = reducer(newState, { type: "DELETE_NAME", payload: "Lena" });
console.log(newState);
