// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import { useState, useEffect} from 'react'

import styles from './Message.module.css'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                {msg}
            </div>
            )}
        </>
    )
}

export default Message
