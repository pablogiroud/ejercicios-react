import React, { useState } from 'react';
//import tareasIngresadas from './ListaDeTareas';
import almacenarTareas from './almacenarTareas';
import GeneradorLista from './GeneradorLista';

const ListaDeTareas = () => {

    const [state, setState] = useState('');
    console.log(state)
    const handler = (e) => {
        setState(e.key);
        const newTareaField = document.querySelector("addTarea")
        newTareaField.addEventListener("newTareaField", updateValue)

        function updateValue(newTareaValue = document.getElementById("addTarea").value){
        console.log(newTareaValue)
        newTareaValue.addEventListener("keyup", function(e) {
            if (e.key === "Enter") {
                almacenarTareas(e, newTareaValue);
            }
        })
        }
    }
    
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Bienvenido</h2>
                    <h6 className="card-subtitle text-center mb-3 text-muted">Ingresa tus tareas</h6>
                    <div>
                        <form>
                            <div className="form-group row">
                                <div className="col-sm-12"> 
                                    <input type="text" className="form-control form-control-sm mb-4" id="addTarea" placeholder="Tarea 1..." onChange={handler(e)}></input>
                                </div>
                                <div id='tareasAgregadas'>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListaDeTareas;