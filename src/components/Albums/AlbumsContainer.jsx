import { connect } from 'react-redux';
import { setAlbumsAC, selectAlbumAC, setCoverAC, setAlbumLengthAC, toggleIsFetchingAC } from './../../redux/reducers/albumsReducer'
import Albums from './Albums';
import { setPhotosAC } from './../../redux/reducers/photosReducer'
import React from 'react'
import * as axios from 'axios'


class AlbumsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.activeAutor}/albums`).then(response => {
      response.data.forEach(el => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${el.id}/photos`).then(response => {
          this.props.toggleIsFetching(false)
          this.props.setCover(response.data[0].thumbnailUrl, el.id)
          this.props.setAlbumLength(response.data.length, el.id)
        })
      });
      this.props.setAlbums(response.data)
    })
  }

  onAlbumClick = (id) => {
    this.props.toggleIsFetching(true)
    this.props.onAlbumSelect(id);
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(response => {
      this.props.setPhotos(response.data)
      this.props.toggleIsFetching(false)
    })
  }

  render() {
    return (
        <Albums state={this.props.state} onAlbumClick={this.onAlbumClick} />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    state: state.albumsPage,
    activeAutor: state.autorsPage.activeAutor
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setAlbums: (albums) => { dispatch(setAlbumsAC(albums)) },
    setCover: (url, id) => { dispatch(setCoverAC(url, id)) },
    setAlbumLength: (l, id) => { dispatch(setAlbumLengthAC(l, id)) },
    setPhotos: (photos) => { dispatch(setPhotosAC(photos)) },
    onAlbumSelect: (id) => { dispatch(selectAlbumAC(id)) },
    toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);

