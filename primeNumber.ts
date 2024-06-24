/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const primes = (n: number) => {
  let prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (prime[p] === true) {
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (prime[i] === true) {
      primes.push(i);
    }
  }
  return primes;
};

const primeNumber = (n: number) => {
  const primeNumbers = primes(n);
  console.log(primeNumbers);
};

function main() {
  primeNumber(100);
}
main();
