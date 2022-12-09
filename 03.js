/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  
  /*var amigos = [{ nombre: 'toni',   edad: 33 } , 
                { nombre: 'ana',    edad: 25 } , 
                { nombre: 'Daniel', edad: 12 } , 
                { nombre: 'sami',   edad: 25 } ,  
                { nombre: 'rober',  edad: 20 } , 
                { nombre: 'michael',  edad: 25 } , 
                { nombre: 'gabriela', edad: 18 } ,  
                { nombre: 'jhon',     edad: 25 } ,  
                { nombre: 'carlos',   edad: 35 } ,  
                { nombre: 'alberto',  edad: 11 }];                
  var nombre = "gabriela"*/
  var objetoAmigo = {};

  for(let i=0; i<amigos.length;i++){
      if(amigos[i].nombre == nombre)
          objetoAmigo = amigos[i];
  }

  return objetoAmigo;
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo