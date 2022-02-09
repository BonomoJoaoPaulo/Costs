// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import styles from './Container.module.css'

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
        </div>
}

export default Container
