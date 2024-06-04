var Campo = []
Campo.push(new campo("00001", "texto de ejemplo", "aaaaa 123", "comic sans", "8", "ejemplo",
    "si", "10", "10110", "10", "no", "campoa"))


function listarCampos() {
    var filas = "";
    for (let i = 0; i < Campo.length; i++) {
        var c = Campo[i];
        filas = filas + "<tr>";
        filas = filas + "<td>" + c.campo1.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo2.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo3.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo4.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo5.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo6.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo7.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo8.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo9.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo10.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo11.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.campo12.toUpperCase() + "</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}
document.addEventListener("DOMContentLoaded", function () { listarCampos() });

function limpiarCampos(x) {
    if (x === 1) {
        document.getElementById("txtca1").value = "";
    }
    document.getElementById("txtca2").value = "";
    document.getElementById("txtca4").value = "";
    document.getElementById("txtca3").value = "";
    document.getElementById("txtca5").value = "";
    document.getElementById("cboca6").value = "";
    document.getElementById("opsi").checked = true;
    document.getElementById("txtca8").value = "";
    document.getElementById("txtca9").value = "";
    document.getElementById("cboca10").value = "";
    document.getElementById("opsip").checked = true;
    document.getElementById("cbca12").value = "";
}

function consultar() {
    var ca1 = document.getElementById("txtca1").value;
    if (ca1.trim().length < 1 || ca1.trim().length > 5) {
        alert("Debe digitar un campo1 para buscar!");
        document.getElementById("txtca1").value = "";
        document.getElementById("txtca1").focus();
    } else {
        let sw = 0;
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if (ca1 === c.campo1) {
                sw = 1;
                document.getElementById("txtca2").value = c.campo2;
                document.getElementById("txtca4").value = c.campo4;
                document.getElementById("txtca3").value = c.campo3;
                document.getElementById("txtca5").value = c.campo5;
                document.getElementById("cboca6").value = c.campo6;
                if (c.campo7 === "NUEVO") {
                    document.getElementById("opsi").checked = true;
                } else {
                    document.getElementById("opno").checked = true;
                }
                document.getElementById("txtca8").value = c.campo8;
                document.getElementById("txtca9").value = c.campo9;
                document.getElementById("cboca10").value = c.campo10;
                if (c.campo11 === "si") {
                    document.getElementById("opsip").checked = true;
                } else {
                    document.getElementById("opnop").checked = true;
                }
                document.getElementById("cbca12").value = c.campo12;
            }
        }
        var msg = "";
        if (sw === 0) {
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>campo1 no encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        } else if (sw === 1) {
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>campo1 encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El campo1 debe ser de 1 a 5 caracteres! \n";
    } else {
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if (ca1 === c.campo1) {
                errores += "El campo ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if (ca2.trim().length < 5 || ca2.trim().length > 30) {
        errores += "El campo2 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 5 || ca4.trim().length > 30) {
        errores += "La campo4 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 5 || ca3.trim().length > 30) {
        errores += "El campo3 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "La campo 5 debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca6.trim().length === 0) {
        errores += "Debe ingresar el campo6! \n";
    }

    if (ca8.trim().length <= 0) {
        errores += "La cantidad de digitos del campo 8 debe ser mayor a 0\n";
    }

    if (ca9.trim().length <= 0) {
        errores += "El campo9 debe ser mayor a 0\n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar una opccion de campo10! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar una opcion! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var c = new campo(ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10, ca11, ca12);
        Campo.push(c);

        var msg = "";
        msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
        msg += "<strong> registrado correctamente!</strong>";
        msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
        msg += "</div>";
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}


function modificar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El código debe ser de 1 a 5 caracteres! \n";
    } else {
        let x = 0;
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if (ca1 === c.campo1) {
                x = 1;
                break;
            }
        }
        if (x === 0) {
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if (ca2.trim().length < 5 || ca2.trim().length > 30) {
        errores += "El campo2 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 5 || ca3.trim().length > 30) {
        errores += "El título debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 5 || ca4.trim().length > 30) {
        errores += "La campo4 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "La edición debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca8.trim().length === 0 || ca8 <= 0) {
        errores += "El número de páginas debe ser un número positivo! \n";
    }

    if (ca9.trim().length === 0 || ca9 <= 0) {
        errores += "El campo9 debe ser un número positivo! \n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar el país de campo10! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar el género! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var sw = 0;
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if (ca1 === c.campo1) {
                var x = confirm("Desea modificar el registro?");
                if (x === true) {
                    sw = 1;
                    Campo[i].campo2 = ca2;
                    Campo[i].campo3 = ca3;
                    Campo[i].campo4 = ca4;
                    Campo[i].campo5 = ca5;
                    Campo[i].campo6 = ca6;
                    Campo[i].campo7 = ca7;
                    Campo[i].campo8 = ca8;
                    Campo[i].campo9 = ca9;
                    Campo[i].campo10 = ca10;
                    Campo[i].campo11 = ca11;
                    Campo[i].campo12 = ca12;
                    break;
                } else {
                    sw = 2;
                }
            }
        }

        var msg = "";
        if (sw === 0) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 1) {
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> modificado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 2) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El  no fue modificado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}

function eliminar(){
    var ca1 = document.getElementById("txtca1").value.toUpperCase();

    var errores = "";
    if(ca1.trim().length < 1 || ca1.trim().length > 5){
        errores += "El código debe contener entre 1 y 5 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if(ca1 === c.campo1){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < Campo.length; i++) {
            var c = Campo[i];
            if(ca1 === c.campo1){
                var x = confirm("Desea eliminar el registro?");
                if(x === true){
                    sw = 1;
                    Campo.splice(i, 1);
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 1){
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> eliminado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 2){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El  no fue eliminado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}