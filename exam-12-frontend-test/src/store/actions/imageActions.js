import axios from '../../axios-api';

export const IMG_FETCH_SUCCESS = "IMG_FETCH_SUCCESS";

const fetchImageSuccess = images => ({type: IMG_FETCH_SUCCESS, images});

export const fetchImage = () => {
  return dispatch => {
      return axios.get('/images').then(response => {
          dispatch(fetchImageSuccess(response.data));
      })
  }
};