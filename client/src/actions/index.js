import streams from '../apis/streams';
import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    let { userId } = getState().auth;
    let response = await streams.post('/streams', {
      ...formValues,
      userId,
    });
    dispatch({
      type: CREATE_STREAM,
      payload: response.data,
    });
    history.push('/');
  };
};

//caution !!! especially on typo on payload!

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: response.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data,
    });
    history.push('/');
  };
};
//editStream is a put request, so that means it will update all properties of a record(side effects of put request!)
//one way is to use patch request(to only update parts of the a record)

// export const editStream = (id, formValues) => {
//   return async (dispatch) => {
//     const response = await streams.patch(`/streams/${id}`, formValues);
//     dispatch({
//       type: EDIT_STREAM,
//       payload: response.data,
//     });
//     history.push('/');
//   };
// };

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
  };
};
