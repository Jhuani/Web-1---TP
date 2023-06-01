

function validar() { 
    let primero = document.querySelector("form input");
primero.focus();

let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

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
        p.innerHTML = alert("ingrese un nombre o apellido");
        hubo_error = true;
    }

    if (f_telefono.value == "") {
        f_telefono.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Falta el telefono");
        hubo_error = true;
    }

    if (f_archivo.value == "") {
        f_archivo.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Falta cargar su CV");
        hubo_error = true;
    }

    if (f_email.value == "" && !reg_correo.test(f_email.value)) {
        f_email.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = alert("Email inválido");
        hubo_error = true;
    }

    if (hubo_error) {
        //lta_errores.style.display = "initial";
        return false;
    } else {
        let p = document.createElement("p");
        p.innerHTML=alert("Su CV se cargo con exito al sistema")
        document.forms["f_sumate"].reset();
        let primero = document.querySelector("form input");
        primero.focus();
    }
    return false;
}