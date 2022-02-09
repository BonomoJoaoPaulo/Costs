// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'),
)
