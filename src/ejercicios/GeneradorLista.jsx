import React from 'react'


const GeneradorLista = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || []
    console.log(tareas)
    return (
        <ul className="list-unstyled">
                {tareas.map(tarea=>{
                    return <li className="form-control form-control-sm mb-2" key={tarea.tarea}>{tarea.tarea}</li>
                })}
        </ul>
        )
}

export default GeneradorLista;