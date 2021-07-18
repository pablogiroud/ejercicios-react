function almacenarTareas(event, newTareaValue){
    event.preventDefault();
    let tarea = newTareaValue;
    console.log(tarea)
    localStorage.setItem("tarea", JSON.stringify(tarea))
}