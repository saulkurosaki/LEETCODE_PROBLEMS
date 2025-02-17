// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// 1 <= n <= 231 - 1

function isHappy(n) {
  let numMap = new Map(); // HashMap para registrar números vistos

  function getNext(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  while (n !== 1 && !numMap.has(n)) {
    numMap.set(n, true); // Guardamos n en el HashMap
    n = getNext(n);
  }

  return n === 1;
}

//* Explicación
// 	1.	Usamos un Map en lugar de un Set para almacenar números ya visitados.
// 	2.	Creamos getNext(num), que obtiene la suma de los cuadrados de los dígitos.
// 	3.	Mientras n no sea 1 y no haya sido visto antes, seguimos iterando.
// 	4.	Si n se repite, hay un ciclo y retornamos false.
// 	5.	Si n llega a 1, el número es feliz (true).

//* Complejidad:
// O(\log n) porque cada número tiene aproximadamente \log n dígitos.
