import axios from '../../axios-api';
import {push} from 'connected-react-router';

export const IMG_FETCH_SUCCESS = "IMG_FETCH_SUCCESS";
export const IMG_ONE_FETCH_SUCCESS = "IMG_ONE_FETCH_SUCCESS";
export const IMG_DELETE_SUCCESS = "IMG_DELETE_SUCCESS";
export const CREATE_IMAGE_SUCCESS = "CREATE_IMAGE_SUCCESS";

const fetchImageSuccess = images => ({type: IMG_FETCH_SUCCESS, images});
const fetchImageOneSuccess = img => ({type: IMG_ONE_FETCH_SUCCESS, img});

const deleteImgSuccess = () => ({type: IMG_DELETE_SUCCESS});
const createPhotoSuccess = () => ({type: CREATE_IMAGE_SUCCESS});

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

export const deleteImage = (id) => {
    return dispatch => {
        return axios.delete('/images/' + id).then(() => {
            dispatch(deleteImgSuccess());
            dispatch(push('/'))
        })
    }
};

export const createPhoto = photoData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {"Authorization": token}};
        return axios.post('/images', photoData, config).then(
            response => {
                dispatch(createPhotoSuccess());
                dispatch(push('/'))
            }
        )
    };
};