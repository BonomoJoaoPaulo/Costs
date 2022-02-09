// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
            <p>Carregando...</p>
        </div>
    )
}

export default Loading
