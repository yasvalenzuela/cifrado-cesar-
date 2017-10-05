# CIFRADO CESAR

## Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

### pseudocodigo
```
#### defino una funcion principal:
+ function answer: con esta funcion pido al ususario que ingrese una opcion de lo desea realizar
dentro de la funcion creo un bucle do...while para que el usuario si o si ingrese un opcion
a traves de un prompt le pido al usuario que ingrese una opcion de lo que desea realizar 1) cifrar o 2) decifrar
si el dato ingresado es igual a 1 se ejecuta la funcion cipher
si el dato ingresado es igual a 2 se ejecuta la funcion decipher
si el usuario no ingresa nada se genera una alerta que le pida que ingrese una opcion valida, esto se repite hasta que el usuario ingrese una opcion

#### defino subfunciones:
+ function cipher: con esta funcion se realizara el cifrado cesar, si en el prompt de la funcion de la funcion anterior el usuario ingresa la opcion 1 se ejecuta esta funcion
- creo una variable llamada sentence en donde se guardara la palabra que el usuario ingrese eso lo realizo mediante un prompt
- creo una variable tipo string vacia, en donde se guardaran los indices cifrados
- realizo un ciclo for para que recorra la palabra ingresada por el usuario
	- creo una variable llamada letterFirst en donde codifico cada indice de la palabra que ingreso el ususario a codigo ASCII

	- ya codificada la palabra aplico la formula de cifrado cesar dentro de la variable letterFirst

	- ahora mi variable letterFirst pasa lo cifrado a letra

	- ahora retornara una alerta al usuario con su palabra cifrada

+ function decipher: con esta funcion se ejecutara de decifrado cesar, si en el prompt de la funcion de la funcion anterior el usuario ingresa la opcion 2 se ejecuta esta funcion
- creo una variable llamada sentence en donde se guardara la palabra que el usuario ingrese eso lo realizo mediante un prompt
- creo una variable tipo string vacia, en donde se guardaran los indices cifrados
- realizo un ciclo for para que recorra la palabra ingresada por el usuario
	- creo una variable llamada letterSecond en donde codifico cada indice de la palabra que ingreso el ususario a codigo ASCII

	- ya codificada la palabra aplico la formula de decifrado cesar dentro de la variable letterSecond

	- ahora mi variable letterSecond pasa lo decifrado a letra

	- ahora retornara una alerta al usuario con su palabra decifrada





