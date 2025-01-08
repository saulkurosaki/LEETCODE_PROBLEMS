// 167. Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

function twoSum(numbers, target) {
  let left = 0; // Puntero izquierdo
  let right = numbers.length - 1; // Puntero derecho

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // Retornar índices ajustados a 1-indexado
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++; // Mover el puntero izquierdo hacia la derecha
    } else {
      right--; // Mover el puntero derecho hacia la izquierda
    }
  }

  // No debería llegar aquí porque se garantiza que hay exactamente una solución
  return [];
}

//* Estrategia

// •	Un puntero comienza en el inicio del array.
// •	Otro puntero comienza al final del array.

// 1.	Calcula la suma de los valores en las posiciones de los dos punteros.
// 2.	Si la suma es igual al target, hemos encontrado la solución.
// 3.	Si la suma es menor al target, mueve el puntero izquierdo hacia la derecha.
// 4.	Si la suma es mayor al target, mueve el puntero derecho hacia la izquierda.

//* Complejidad
// 	•	Tiempo: O(n), donde n es la longitud del array numbers. Cada elemento se procesa como máximo una vez debido al movimiento de los punteros.
// 	•	Espacio: O(1), ya que no usamos estructuras de datos adicionales.
