import * as actionType from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: actionType.ADD_BOOK,
    payload: newBook,
  };
};

export const deletedBook = (id) => {
  return {
    type: actionType.DELETE_BOOK,
    payload: id,
  };
};
