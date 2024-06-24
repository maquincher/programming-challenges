//fizz-buzz level 1
/*
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let num = 1;
while (num <= 100) {
  if (num % 3 == 0 && num % 5 == 0) console.log(`${num}:fizzbuzz`);
  else if (num % 3 == 0) console.log(`${num}:fizz`);
  else if (num % 5 == 0) console.log(`${num}:buzz`);
  else console.log(num);
  num++;
}
