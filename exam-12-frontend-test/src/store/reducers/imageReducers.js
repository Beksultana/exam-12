import {IMG_FETCH_SUCCESS, IMG_ONE_FETCH_SUCCESS} from "../actions/imageActions";

const initialSate = {
    images: [],
    image: []
};

const imageReducer = (state = initialSate, action) => {
    switch (action.type) {
        case IMG_FETCH_SUCCESS:
            return {
                ...state, images: action.images
            };
        case IMG_ONE_FETCH_SUCCESS:
            return {
                ...state, image: action.img
            };
        default:
            return state;
    }
};

export default imageReducer;