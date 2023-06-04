

function validar() {
    let primero = document.querySelector("form input");
    primero.focus();

    let reg_correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let f_nya = document.querySelector("#f_nya");
    f_nya.classList.remove("error");

    let f_telefono = document.querySelector("#f_telefono");
    f_telefono.classList.remove("error");

    let f_email = document.querySelector("#f_email");
    f_email.classList.remove("error");

    let f_archivo = document.querySelector("#f_archivo");
    f_archivo.classList.remove("error");

    let lta_errores = document.querySelector("#errores");
    lta_errores.innerHTML = "";
    lta_errores.innerHTML = " ";
    lta_errores.style.display = "none";
    let hubo_error = false;

    if ((f_nya.value == "") || (f_nya.value == " ")) {
        f_nya.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. Debe cargar su nombre y apellido");
        hubo_error = true;
    }

    if (f_telefono.value == "") {
        f_telefono.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. Debe cargar su numero de telefono");
        hubo_error = true;
    }

    if (f_archivo.value == "") {
        f_archivo.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Error. Debe cargar su archivo CV");
        hubo_error = true;
    }

    if (reg_correo.test(f_email.value)) {
        alert('Su solicitud se envio correctamente.');
        alert(' Pronto estaremos en contacto con Ud. ¡Muchas gracias!')
        return true;
    } else {
        alert('Email invalido. Reintentar.');
        return false;
    }
}