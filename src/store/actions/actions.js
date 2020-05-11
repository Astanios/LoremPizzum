import actionTypes from "./actionTypes";
export const order = (order) => {
  return dispatch =>
    dispatch({
      type: actionTypes.FETCH_ORDER,
      payload: order
    });
};


export const orders = () => {
  return dispatch =>
    dispatch({
      type: actionTypes.FETCH_LOG
    });
};


export const update = payload => {
  return {
    type: actionTypes.UPDATE,
    payload
  };
};
export const clear = () => {
  return {
    type: actionTypes.CLEAR
  };
};
