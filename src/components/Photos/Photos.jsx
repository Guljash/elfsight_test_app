import React from 'react'
import { Link } from 'react-router-dom'
import PopUp from './PopUp/PopUp'
import styles from './Photos.module.css'
import Preloader from '../Preloader/Preloader'

const Photos = (props) => {

    let popUpImg = props.state.popUpUrl

    const onPhotoClick = (url, index) => {
        props.onPhotoClick(url, index);
    }

    const onBtnDirectionClick = (direction) => {
        props.onBtnDirectionClick(direction)
    }

    const onBtnCloseClick = () => {
        props.onBtnCloseClick()
    }

    return (
        <div>
            {popUpImg === null ? null :
                <PopUp>
                    <div className={styles.modal}>
                        <div className={styles.closeArea} onClick={() => { onBtnCloseClick() }}>
                            <div className={styles.close}></div>
                        </div>
                        <div className={styles.modalImg}>
                            <div className={styles.prev} onClick={() => { onBtnDirectionClick(false) }}></div>
                            <img src={popUpImg} alt="" />
                            <div className={styles.next} onClick={() => { onBtnDirectionClick(true) }}></div>
                        </div>
                    </div>
                </PopUp>
            }

            {props.isFetching ?
                <Preloader />
                :
                <div>
                    <Link to="/"><div className={`${styles.back} ${popUpImg === null ? null : styles.blur}`}></div></Link>
                    <div className={`${styles.photosWrapper} ${popUpImg === null ? null : styles.blur}`}>{
                        props.state.photosData.map((el, index) => (
                            <div key={el.id} onClick={() => { onPhotoClick(el.url, index) }}><img src={el.thumbnailUrl} alt={el.id} /></div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}


export default Photos