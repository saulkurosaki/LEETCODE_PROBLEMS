// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//* Algoritmo de Boyer-Moore (Enfoque óptimo con  O(n)  tiempo y  O(1)  espacio)

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

//   •	Usamos una variable candidate para rastrear el posible elemento mayoritario.
// 	•	Si el contador llega a 0, actualizamos el candidato al elemento actual.
// 	•	Incrementamos el contador si el elemento es igual al candidato, de lo contrario lo decrementamos.

// Complejidad del algoritmo de Boyer-Moore

// 	•	Tiempo:  O(n) , porque recorremos el array una vez.
// 	•	Espacio:  O(1) , ya que solo utilizamos un par de variables para realizar un seguimiento del candidato y el contador.
