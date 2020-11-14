import { connect } from 'react-redux';
import { setPhotosAC, selectPhotoAC, btnDirectionAC, btnCloseAC } from './../../redux/reducers/photosReducer'
import Photos from './Photos';


let mapStateToProps = (state) => {
  return {
    state: state.photosPage,
    isFetching: state.albumsPage.isFetching,
    activeAutor: state.autorsPage.activeAutor
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setPhotos: (photos) => { dispatch(setPhotosAC(photos)) },
    onPhotoClick: (url, index) => { dispatch(selectPhotoAC(url, index)) },
    onBtnDirectionClick: (direction) => { dispatch(btnDirectionAC(direction)) },
    onBtnCloseClick: () => { dispatch(btnCloseAC()) },
  }
}
const PhotosContainer = connect(mapStateToProps, mapDispatchToProps)(Photos);

export default PhotosContainer;