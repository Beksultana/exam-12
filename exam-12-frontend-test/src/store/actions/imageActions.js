import axios from '../../axios-api';

export const IMG_FETCH_SUCCESS = "IMG_FETCH_SUCCESS";
export const IMG_ONE_FETCH_SUCCESS = "IMG_ONE_FETCH_SUCCESS";

const fetchImageSuccess = images => ({type: IMG_FETCH_SUCCESS, images});
const fetchImageOneSuccess = img => ({type: IMG_ONE_FETCH_SUCCESS, img});

export const fetchImages = () => {
  return dispatch => {
      return axios.get('/images').then(response => {
          dispatch(fetchImageSuccess(response.data));
      })
  }
};

export const fetchImage = id => {
    return dispatch => {
        return axios.get('/images/'+ id).then(response => {
            dispatch(fetchImageOneSuccess(response.data));
        })
    }
};