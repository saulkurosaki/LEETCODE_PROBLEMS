// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

function containsNearbyDuplicate(nums, k) {
  let numMap = new Map(); // HashMap para almacenar números y sus índices

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i]) && i - numMap.get(nums[i]) <= k) {
      return true; // Se cumple la condición
    }
    numMap.set(nums[i], i); // Guardamos el índice más reciente del número
  }

  return false;
}

//* Explicación
// 	1.	Creamos un Map para almacenar el último índice visto de cada número.
// 	2.	Recorremos el array:
// 	•	Si el número ya está en el Map, verificamos si la diferencia de índices es \leq k.
// 	•	Si es así, retornamos true.
// 	•	Si no, actualizamos el índice del número en el Map.
// 	3.	Si terminamos el recorrido sin encontrar pares que cumplan la condición, retornamos false.

//* Complejidad
// •	Tiempo: Recorremos el array una sola vez y cada operación de Map (get y set) es  O(1) .
// •	Espacio: En el peor caso, almacenamos hasta  \min(n, k)  elementos en el Map, ya que una vez que  k  es menor que el tamaño del array, algunos valores pueden sobrescribirse.
