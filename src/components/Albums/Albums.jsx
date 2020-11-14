import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Albums.module.css'
import Preloader from '../Preloader/Preloader'

const Albums = (props) => {
    return (
        <div>
            {props.state.isFetching ?
                <Preloader />
                :
                <div className={styles.albumsWrapper}>{
                    props.state.albumsData.map((el) => (
                        <div className={styles.li} key={el.id} onClick={() => { props.onAlbumClick(el.id) }}>
                            <Link to={`/${el.id}`}>
                                <div><img src={el.cover} alt="" /></div>
                                <span className={styles.label}>{el.title}</span><br />
                                <span>{`${el.lenght} photos`}</span>
                            </Link>
                        </div>
                    ))}
                </div>}
        </div>
    )
}

export default Albums