/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:

//var num = 321121123;
  var num2= "";

  num = num.toString();  

  for(let i=(num.length-1); i>=0; i--){
      num2 = num2 + (num[i]);
  }

  if(num == num2)
      return(true);
  else
      return(false);
      
  /*console.log(num);
  console.log(num2);*/

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico