const InputTarea = () => {
    let tareita = document.getElementById("addTarea");
    tareita.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.querySelector('tareasAgregadas').innerHTML=`
            <div className="col-sm-12">
                <input type="text" className="form-control form-control-sm mb-2" id="colFormLabelSm" placeholder=${tareita}></input>
            </div>
            `
        }
    }
)}

export default InputTarea;
