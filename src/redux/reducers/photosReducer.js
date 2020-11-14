const SET_PHOTOS = "SET_PHOTOS"
const SELECT_PHOTO = "SELECT_PHOTO"
const CHANGE_PHOTO = "CHANGE_PHOTO"
const CLOSE_POPUP = "CLOSE_POPUP"

const initialState = {
    photosData: [],
    popUpUrl: null,
    popUpIndex: null,
}

const photosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photosData: [...action.photos] }
        case SELECT_PHOTO:
            return { ...state, popUpUrl: action.url, popUpIndex: action.index }
        case CLOSE_POPUP:
            return { ...state, popUpUrl: null, popUpIndex: null }
        case CHANGE_PHOTO:
            let index = state.popUpIndex
            if (action.direction) {
                if (index === state.photosData.length - 1) {
                    index = 0
                }
                else {
                    index++
                }
            }
            else if (!action.direction) {
                if (index === 0) {
                    index = state.photosData.length - 1
                }
                else {
                    index--
                }
            }
            return { ...state, popUpUrl: state.photosData[index].url, popUpIndex: index }
        default:
            return state
    }
}

export const setPhotosAC = (photos) => {
    return {
        type: SET_PHOTOS,
        photos: photos
    }
}

export const selectPhotoAC = (url, index) => {
    return {
        type: SELECT_PHOTO,
        url: url,
        index: index
    }
}

export const btnDirectionAC = (direction) => {
    return {
        type: CHANGE_PHOTO,
        direction: direction
    }
}

export const btnCloseAC = () => {
    return {
        type: CLOSE_POPUP,
    }
}


export default photosReducer