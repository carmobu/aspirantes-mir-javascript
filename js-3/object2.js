var persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Ingeniero"
  };
  
console.log(persona);

function presentacion(persona) {
    return "Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
console.log(presentacion(persona));

var mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["viajar", "leer", "cocinar"];

console.log(persona);


  
for (var i = 0; i < persona.hobbies.length; i++) {

    console.log(persona.hobbies[i]);
}
