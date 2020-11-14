import React from 'react'
import styles from './Autors.module.css'

const Autors = (props) => {
    return (
        <div className={styles.autors}>
            <ul>{
                props.state.autorsData.map(el => (

                    <li className={styles.li} key={el.id} onClick={() => { props.onAutorClick(el.id) }}>{el.name}</li>

                ))}
            </ul>
        </div>
    )
}

export default Autors