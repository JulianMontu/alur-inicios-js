/*
  Boton adicionar con sus funciones
*/
var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  /*preventDefault => prevenir para que no se recargue la pagina*/
  event.preventDefault()
  
  var form = document.querySelector("#form-adicionar");
  var paciente = capturarDatosPaciente(form);
  var pacienteTr = construirTr(paciente);
  var errores = validarPaciente(paciente);
  console.log(errores);
  //validar paciente
  if (errores.length > 0) {
    // var mensajeError = document.querySelector("#mensaje-error");
    // mensajeError.textContent = error;
    exhibirMensajesErrores(errores);
    return;
  }
  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
  form.reset();
});

function capturarDatosPaciente(form) {
  // Objeto paciente, a traves de una clase
  var paciente = {
    //capturando los datos del formulario
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };

  return paciente;
}

function construirTr(paciente) {
  //crear los tds  y un tr
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  /*var nombreTd = construirTd(paciente.nombre, "info-nombre");
  var pesoTd = construirTd(paciente.peso, "info-peso");
  var alturaTd = construirTd(paciente.altura, "info-altura");
  var gorduraTd = construirTd(paciente.gordura, "info-gordura");
  var imcTd = construirTd(paciente.imc, "info-imc");*/

  //Asignar los valores a la propiedad  textContent de nuestros campos
  /*nombreTd.textContent = paciente.nombre;
  alturaTd.textContent = paciente.altura;
  pesoTd.textContent = paciente.peso;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;*/

  // Asignación al tr de los td, y la  tabla de los tr
  pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function construirTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}
function validarPaciente(paciente) {
  var errores = [];

  if (paciente.nombre.length == 0) {
    return errores.push("El campo nombre no puede ser vacio");
  }
  if (paciente.peso.length == 0) {
    return errores.push("El campo peso no puede ser vacio");
  }
  if (paciente.altura.length == 0) {
    return errores.push("El campo altura no puede ser vacio");
  }
  if (paciente.gordura.length == 0) {
    return errores.push("El campo gordura no puede ser vacio");
  }
  if (!validarPeso(paciente.peso)) {
    return errores.push("El peso es incrorrecto");
  }
  if (!validarAltura(paciente.altura)) {
    return errores.push("la altura es incrorrecta");
  }
  return errores;
}

function exhibirMensajesErrores(errores) {
  var ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";
  errores.forEach((error) => {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}
