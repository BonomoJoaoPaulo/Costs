// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Custo do serviço:</span> R${cost}</p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>

            </div>
        </div>
    )
}

export default ServiceCard
