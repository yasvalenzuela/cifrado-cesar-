// var sentence = prompt("Escribe una frase"); // con esto pido al usuario que escriba una frase
function answer() { // creo una funcion 
  do {
    var answerFirst = prompt('Indique la opción que desea realizar: 1) Cifrar - 2) Decifrar'); // le pido al usuario lo que quiere hacer

    if (answerFirst !== '') { // si es distinto a string vacio
      if (answerFirst === '1') { // si es igual a 1
        cipher(); // llamo a cipher
      } else if (answerFirst === '2') { // sino se cumplen las condiciones anteriores y la opcion es 2
			    decipher(); // llamo a decipher
      } else { // sino mandara la alerta
        alert('Indique una opción válida');
      }
    }
  } while (answerFirst === '' || (answerFirst !== '1' && answerFirst !== '2')); // para que siga pidiendo que ingrese una opcion hasta que sea correcta
}

function cipher() { // creo la funcion con la cual hare el cifrado
  var sentence = prompt('Escriba una palabra por favor'); // le pido al usuario que ingrese una frase la cual cifrare
  var cont = ''; // variable vacia aqui quedara los nuevo valores
  for (var i = 0; i < sentence.length; i++) { // para que recorra el string
    var letterFirst = sentence.charCodeAt(i); // tengo el codigo ASCII
    letterFirst = (((((letterFirst - 65) + 33) + 26) % 26) + 65); // formula de cifrado
    letterFirst = String.fromCharCode(letterFirst); // con esto lo cifrado lo paso a letra
    cont = cont + letterFirst; // resultado para cada indice se va a guardar en la variable cont
  }
  return alert('Así queda tu texto cifrado: \n' + cont); // alerta que retorna 
}
/*
	var resultado = ""; //crear string vacío para ir concatenándole los índices cifrados
	for (var i = 0 ; i < str.length ; i++){ 
		if (str[i] == " "){ //si el índice es un espacio, devolver un espacio
			resultado = resultado + " ";
		}else{
			var letter = str.charCodeAt(i); //pasar el contenido del índice a ASCII
			letter = (((letter - 65) + 33) % 26) + 65;  //cifrar el índice. aquí es de ASCII a ASCII
			letter = String.fromCharCode(letter); // pasar a letra el índice cifrado en ASCII
			resultado = resultado + letter; 
		}
	}
	return alert("Así queda tu texto cifrado: \n" + resultado);

	/*
    var resultado = "";
    for(var i= 0; i < str.length; i++){
    	if(str[i] == " "){
    		resultado.push(((((sentence[i] - 65) + 33) % 26) + 65));

    	}
*/

function decipher() {
  var sentence = prompt('Escriba una frase por favor');
  var count = '';

  for (var i = 0; i < sentence.length; i++) {
    var letterSecond = sentence.charCodeAt(i); // codigo ASCII
    letterSecond = ((((letterSecond - 65) + 33) + 26) % 26) + 65;
    letterSecond = String.fromCharCode(letterSecond);
    count = count + letterSecond;
  }
  return alert('Así queda tu texto decifrado: \n' + count);
}
answer();

/*
function convertDoubleSpaceToSingle(str) {
  var myArray = str.split("  "); //corta el string (separa las palabras) casa dos espacios y devuelve un array con cada palabra como elementos por separado
  myArray = myArray.join(" "); // une cada elemento del array en un string y los separa por un espacio
  return myArray;
}
*/