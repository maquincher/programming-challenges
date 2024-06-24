/*
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagram = (word1: string, word2: string): string => {
  const wordA = word1.split("").sort().join();
  const wordB = word2.split("").sort().join();
  //console.log(wordA, wordB);
  if (wordA === wordB) return "Anagram";
  else return "it isn't anagram";
};

function main() {
  // Verifica que se pasaron dos argumentos por consola
  if (process.argv.length !== 4) {
    console.error("Usage: node anagram.ts word1 word2");
    return;
  }

  // Obtiene los argumentos de la consola
  const word1 = process.argv[2];
  const word2 = process.argv[3];

  console.log(anagram(word1, word2));
}

main();
