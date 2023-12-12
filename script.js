//alert("Hola este es mi Javascript");
document.addEventListener("DOMContentLoaded", function() {
  let menu_responsive = document.querySelector(".checkbtn");
  menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
  };
});


//validacion de formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


//funciones
let pnombre = "Michel";
let pciudad = "Bogota";

let pparrafo = document.querySelector (".parrafo2");

function cambiarTexto(pnombre, pciudad){
  let contenido = `Me llamo ${pnombre} vivo en la ciudad de ${pciudad}. Me apasiona crear sitios web orientados al rendimiento y tengo
  experiencia en trabajar en estrecha colaboración con empresas
  locales. Puedo ayudarle a crear una experiencia digital única y
  escalable que deleitará a sus clientes, mejorará su
  clasificación y aumentará la autoridad de su negocio en línea.`;
return contenido;
}

pparrafo.innerText = cambiarTexto(pnombre,pciudad);

//agregar estilos al formulario
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.querySelector(".label").classList.add("focused");
    });

    input.addEventListener("blur", () => {
      if (!input.value) {
        input.parentElement.querySelector(".label").classList.remove("focused");
      }
    });
  });
});