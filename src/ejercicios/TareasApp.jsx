import React, {useState} from "react";

const TareasApp = () => {
    //guardar info de tareas
    const [tareas, setTareas] = useState([])
    const [inputValue, setInputvalue] = useState('')
    
    const change=({target})=>{
        setInputvalue(target.value);
    };

    const guardarTarea=(e)=>{
        e.preventDefault()
        //console.log(inputValue);
        if(inputValue.length>4){
            setTareas([
                ...tareas,
                {
                tarea: inputValue,
                done: false,
                }
            ])
            var frm = document.getElementById('agregarTarea')
            frm.reset()
        }else{
            alert("La tarea debe contener mas de 4 caracteres")
        }
        
    }
    const clearList =()=>{
        setTareas(tareas===[]);
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Bienvenido</h2>
                    <h6 className="card-subtitle text-center mb-3 text-muted">Ingresa tus tareas</h6>
                    <button className="mb-2" onClick={clearList}>Limpiar lista</button>
                    <div>
                        <form id='agregarTarea' onSubmit={guardarTarea}>
                            <div className="form-group row">
                                <div className="col-sm-12"> 
                                    <input type="text" className="form-control form-control-sm mb-4" id="addTarea" placeholder="Tarea 1..." value={inputValue} onChange={change}></input>
                                </div>
                                <ul className="col-sm-12">
                                    {tareas.map(tarea=>{
                                        return <li className="form-control form-control-sm mb-2" key={tarea.done}>{tarea.tarea}</li>
                                    })}
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TareasApp;
