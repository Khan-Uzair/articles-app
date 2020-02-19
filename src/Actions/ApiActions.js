import store from "../store";
import * as types from './../constants/ActionTypes';
import axios from 'axios';

export const loading_state = () => {
  return {
    type: types.ActionTypes.LOADING_STATE
  };
};

export const stop_loading_state = () => {
  return {
    type: types.ActionTypes.STOP_LOADING_STATE
  };
}

export const receive_post = post => {
  return {
    type: types.ActionTypes.FETCHED_ARTICLES,
    data: post
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const fetch_articles = articleId => {
  store.dispatch(loading_state());
  const fecthRequest = articleId ? `http://localhost:3000/articles/${articleId}` : `http://localhost:3000/articles`;
  return function(dispatch, getState) {
    return axios.get(fecthRequest)
      .then(response => {
        if (!response.data) {
          throw new Error("No articles found");
        } else dispatch(receive_post(response.data));
      })
      .catch(err => dispatch(receive_error()));
  };
};

export const create_article = formData => {
  store.dispatch(loading_state());
  const postRequest = `http://localhost:3000/articles`;
  return function(dispatch, getState) {
    return axios.post(postRequest, formData)
      .then(response => {
        let status = true;
        if (!response.status === 201) {
          status = false;
        } else { 
          status = true;
        }
        store.dispatch(stop_loading_state());
        return status;
      })
      .catch(err => dispatch(receive_error()));
  }
}

export const delete_article = articleId => {
  store.dispatch(loading_state());
  const deleteRequest = `http://localhost:3000/articles/${articleId}`;
  return function(dispatch, getState) {
    return axios.delete(deleteRequest)
      .then(response => {
        let status = true;
        if (!response.status === 200) {
          status = false;
        } else {
          status = true;
        }
        store.dispatch(stop_loading_state());
        return status;
      })
      .catch(err => dispatch(receive_error()));
  }
}

export const update_article = ({articleId, formData}) => {
  store.dispatch(loading_state());
  const updateRequest = `http://localhost:3000/articles/${articleId}`;
  return function(dispatch, getState) {
    return axios.put(updateRequest, formData)
      .then(response => {
        let status = true;
        debugger;
        if (!response.status === 200) {
          status = false;
        } else {
          status = true;
        }
        store.dispatch(stop_loading_state());
        return status;
      })
      .catch(err => dispatch(receive_error()));
  }
}