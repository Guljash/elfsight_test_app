const SET_ALBUMS = "SET_ALBUMS"
const SELECT_ALBUM = "SELECT_ALBUM"
const SET_COVER = "SET_COVER"
const SET_ALBUM_LENGTH = "SET_ALBUM_LENGTH"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState = {
    albumsData: [],
    covers: [],
    activeAlbum: 1,
    isFetching: false
}

const albumsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALBUMS:
            return { ...state, albumsData: [...action.albums] }
        case SELECT_ALBUM:
            return { ...state, activeAlbum: action.id }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_COVER:
            return {
                ...state,
                albumsData: state.albumsData.map(el => {
                    if (el.id === action.id) {
                        return { ...el, cover: action.url }
                    }
                    else
                        return { ...el }
                })
            }
        case SET_ALBUM_LENGTH:
            return {
                ...state,
                albumsData: state.albumsData.map(el => {
                    if (el.id === action.id) {
                        return { ...el, lenght: action.l }
                    }
                    else
                        return { ...el }
                })
            }
        default:
            return state
    }
}

export const setAlbumsAC = (albums) => {
    return {
        type: SET_ALBUMS,
        albums: albums,
    }
}

export const setCoverAC = (url, id) => {
    return {
        type: SET_COVER,
        id: id,
        url: url
    }
}

export const setAlbumLengthAC = (l, id) => {
    return {
        type: SET_ALBUM_LENGTH,
        id: id,
        l: l
    }
}

export const selectAlbumAC = (id) => {
    return {
        type: SELECT_ALBUM,
        id: id
    }
}

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


export default albumsReducer