const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth() + 1);
    const diaActual = parseInt(fechaActual.getDate());

    // Obtenemos los datos de la fecha de nacimiento (0000-00-00)
    const anioNacimiento = parseInt(String(fechaNacimiento.substring(0, 4)));
    const mesNacimiento = parseInt(String(fechaNacimiento.substring(5, 7)));
    const diaNacimiento = parseInt(String(fechaNacimiento.substring(8, 10)));
    // Obtenemos los datos de la fecha de nacimiento (0000-00-00) separando los datos (año, mes, dia)
    // const fechaNacimientoArray = fechaNacimiento.split("-");
    // const anioNacimiento = parseInt(fechaNacimientoArray[0]);
    // const mesNacimiento = parseInt(fechaNacimientoArray[1]);
    // const diaNacimiento = parseInt(fechaNacimientoArray[2]);
    // Obtenemos los datos de la fecha de nacimiento (0000-00-00) usando el objeto Date
    // const fechaNacimientoDate = new Date(fechaNacimiento);
    // const anioNacimiento = parseInt(fechaNacimientoDate.getFullYear());
    // const mesNacimiento = parseInt(fechaNacimientoDate.getMonth() + 1);
    // const diaNacimiento = parseInt(fechaNacimientoDate.getDate());

    // Calculamos la edad
    let edad = anioActual - anioNacimiento;
    if (
        mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }

    return edad;
};

window.addEventListener("load", () => {
    fechaNacimiento.addEventListener("change", () => {
        if (fechaNacimiento.value) {
            edad.innerText = `La edad es: ${calcularEdad(
                fechaNacimiento.value
            )} años`;
        } else {
            edad.innerText = ``;
        }
    });
});
