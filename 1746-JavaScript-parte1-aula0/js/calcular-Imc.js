/*
  calculo imc 
*/
var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPaciente = paciente.querySelector(".info-peso");
  var peso = tdPaciente.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = paciente.querySelector(".info-imc");

  var pesoEsValido = validarPeso(peso);
  var alturaEsValida = validarAltura(altura);
  //verdadero o falso --> verdadero
  if (!pesoEsValido) {
    console.log("Peso incorrecto");
    tdImc.textContent = "Peso Incorrecto";
    pesoEsValido = false;
    /* 
        Estilos y mas interactividad para el
        Usuario
    */  
    //paciente.style.color="red"
    //paciente.style.background = "lightcoral";
    paciente.classList.add("paciente-incorrecto");
  }
  //verdadero o falso --> verdadero
  if (!alturaEsValida) {
    console.log("Peso incorrecto");
    tdImc.textContent = "Altura Incorrecto";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }
  //verdadero y verdadero --> verdadero
  // verdadero y falso --> falso
  if (pesoEsValido && alturaEsValida) {
    tdImc.textContent = calcularIMC(peso, altura);
  }
}

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
function validarPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else{
    return false
  }
}
function validarAltura(altura){
  if (altura >= 0 && altura < 3.0) {
    return true;
  }else{
    return false
  }

}
