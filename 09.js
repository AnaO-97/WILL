/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function(cb)
  {
    var arrayFiltro = []; 
    var booleano;
    //console.log(this[3]);
    //console.log(booleano);
    for(let i=0; i<this.length; i++)
    {
        booleano = cb(this[i]);
        if(booleano)
          arrayFiltro.push(this[i]);        
        
        //console.log("iterador = " + i + "bool " + booleano + "--" + "auxiliar" + this[i]);
    }
    
    return arrayFiltro;
  };
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar