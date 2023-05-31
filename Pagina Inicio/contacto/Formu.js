
function validar() {
    let primero = document.querySelector("form input");
    primero.focus();

    let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

    let f_nombre = document.querySelector("#f_nombre");
    f_nombre.classList.remove("error");

    let f_apellido = document.querySelector("#f_apellido");
    f_apellido.classList.remove("error");

    let f_email = document.querySelector("#f_email");
    f_email.classList.remove("error");

    let f_mensaje = document.querySelector("#f_mensaje");
    f_mensaje.classList.remove("error");

    let lta_errores = document.querySelector("#errores");
    lta_errores.innerHTML = "";
    lta_errores.innerHTML = " ";
    lta_errores.style.display = "none";
    let lta_mensajes = document.querySelector("#mensajes");
    let hubo_error = false;

    if ((f_nombre.value == "") || (f_nombre.value == " ")) {
        f_nombre.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Falta el nombre");
        hubo_error = true;
    }

    if (f_apellido.value == "") {
        f_apellido.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Falta el apellido");
        hubo_error = true;
    }

    if (f_mensaje.value == "") {
        f_mensaje.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Falta el mensaje");
        hubo_error = true;
    } else if (f_mensaje.value.length > 200) {
        f_mensaje.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Longitud máxima del mensaje: 200");
        hubo_error = true;
    }

    if (f_email.value = "" && !reg_correo.test(f_email.value)) {
        //if(!/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)?$/.test(f_email.value)){
        f_email.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Email inválido");
        hubo_error = true;
    }

    if (hubo_error) {
        lta_errores.style.display = "initial";
        return false;
    } else {
        let p = document.createElement("p");
        if (f_email.value != "") {
            p.innerHTML =
                f_nombre.value + " dice " +
                f_mensaje.value + ". Contacto: " +
                f_email.value + ".";
        } else {
            p.innerHTML =
                f_nombre.value + " dice " +
                f_mensaje.value + ".";
        }
        alert("Mensaje enviado con exito")
        document.forms["f_contacto"].reset();
        let primero = document.querySelector("form input");
        primero.focus();
    }
    return false;
}