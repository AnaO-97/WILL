/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:

  /*var array     = [{ name: 'TV LCD',     price: 100}, 
                { name: 'Computadora', price: 500 },
                { name: 'cama',        price: 230}, 
                { name: 'nevera',      price: 300 },
                { name: 'lavadora',    price: 500}, 
                { name: 'Computadora', price: 10000 },
                { name: 'microondas',  price: 230}, 
                { name: 'plancha',     price: 80 }]
  var propiedad = "name"*/
  var respuesta = [];

  function elecciones (elemento){
    return respuesta.push(elemento[propiedad]);
  }
  array.map(elecciones);

  /*console.log(propiedad);
  console.log(respuesta);*/

  return respuesta;

}

// No modifiques nada debajo de esta linea //

module.exports = pluck