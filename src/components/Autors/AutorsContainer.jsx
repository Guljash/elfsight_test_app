import { connect } from 'react-redux';
import Autors from './Autors';
import { selectAutorAC, setAutorsAC } from './../../redux/reducers/autorsReducer'
import { setAlbumsAC, setCoverAC, setAlbumLengthAC, toggleIsFetchingAC } from './../../redux/reducers/albumsReducer'
import React from 'react'
import * as axios from 'axios'


class AutorsContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/`).then(response => {
      this.props.setAutors(response.data)
    })
  }

  onAutorClick = (id) => {
    this.props.toggleIsFetching(true)
    this.props.onAutorSelect(id);
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then(response => {
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

  render() {
    return (
      <Autors state={this.props.state} onAutorClick={this.onAutorClick} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.autorsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAutorSelect: (id) => { dispatch(selectAutorAC(id)) },
    setAlbums: (albums) => { dispatch(setAlbumsAC(albums)) },
    setAlbumLength: (l, id) => { dispatch(setAlbumLengthAC(l, id)) },
    setAutors: (autors) => { dispatch(setAutorsAC(autors)) },
    setCover: (url, id) => { dispatch(setCoverAC(url, id)) },
    toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AutorsContainer);

