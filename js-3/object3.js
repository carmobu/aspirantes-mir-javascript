var receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];

var ingrediente1 = { nombre: "Pan", cantidad: 2 };
receta.ingredientes.push(ingrediente1);

var ingrediente2 = { nombre: "Queso", cantidad: 1 };
receta.ingredientes.push(ingrediente2);

console.log(receta.ingredientes[0].nombre);

var sumaCantidades = 0;
for (var i = 0; i < receta.ingredientes.length; i++) {
  sumaCantidades += receta.ingredientes[i].cantidad;
}

console.log("La suma de las cantidades de los ingredientes es: " + sumaCantidades);