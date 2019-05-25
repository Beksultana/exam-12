import {IMG_FETCH_SUCCESS} from "../actions/imageActions";

const initialSate = {
    images: []
};

const imageReducer = (state = initialSate, action) => {
    switch (action.type) {
        case IMG_FETCH_SUCCESS:
            return {
                ...state, images: action.images
            };
        default:
            return state;
    }
};

export default imageReducer;