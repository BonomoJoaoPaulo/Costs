// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton
