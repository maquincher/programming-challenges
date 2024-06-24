/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const fibo = (quatity: number) => {
  const numbers: number[] = [0, 1];
  if (quatity < 2) {
    numbers.forEach((n) => {
      console.log(n);
    });
  }

  for (let i = 1; i < quatity; i++) {
    numbers.push(numbers[i] + numbers[i - 1]);
  }
  console.log(numbers);
};

function main() {
  fibo(50);
}

main();
