// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let contactos = [
  "Juan Pérez",
  "María Gómez",
  "Carlos Rodríguez",
  "Ana López"
];

// Crea una función para añadir un nuevo contacto a una lista
function agregarContacto(nombreApellido) {
  contactos.push(nombreApellido);
  console.log("Contacto agregado:", nombreApellido);
}

// Crea una función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  const indice = contactos.indexOf(nombreApellido);
  if (indice !== -1) {
    contactos.splice(indice, 1);
    console.log("Contacto borrado:", nombreApellido);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

// Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  contactos.forEach((contacto, indice) => {
    console.log(indice + 1 + ". " + contacto);
  });
}


agregarContacto("Laura Martínez");
agregarContacto("Pedro Gómez");
imprimirContactos();

borrarContacto("Carlos Rodríguez");
imprimirContactos();
