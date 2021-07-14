import React from 'react'

const ListaDeTareas = () => {
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
                                    <input type="text" className="form-control form-control-sm mb-4" id="addTarea" placeholder="Tarea 1..." onChange='tareinha(event)'></input>
                                </div>
                                <div id='tareasAgregadas'>
                                {/*<div className="col-sm-12">
                                    <input type="text" className="form-control form-control-sm mb-2" id="colFormLabelSm" placeholder="Tarea 1"></input>
                                </div>*/}
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

const tareinha=function(e){
let tareita = document.getElementById("addTarea").value;
tareita.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('tareasAgregadas').innerHTML=`
        <div className="col-sm-12">
            <input type="text" className="form-control form-control-sm mb-2" id="colFormLabelSm" placeholder=${tareita}></input>
        </div>
        `
    }
})
}