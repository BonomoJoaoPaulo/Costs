// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit , btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input 
              type='text'
              text="Nome do serviço"
              name='name'
              placeholder='Insira o nome do serviço'
              handleOnChange={handleChange}
            />
            <Input 
              type='number'
              text="Custo do serviço"
              name='cost'
              placeholder='Insira o valor total'
              handleOnChange={handleChange}
            />
            <Input 
              type='text'
              text="Descrição do serviço"
              name='description'
              placeholder='Descreva do serviço'
              handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm
