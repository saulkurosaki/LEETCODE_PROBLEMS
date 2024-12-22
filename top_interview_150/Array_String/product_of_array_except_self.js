// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Construcción del producto prefix
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix; // El producto acumulado de los elementos a la izquierda
    prefix *= nums[i];
  }

  // Construcción del producto suffix y cálculo final
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix; // Multiplica el producto acumulado de la derecha
    suffix *= nums[i];
  }

  return answer;
}

// Explicación del Algoritmo

// 	1.	Array de prefijos (prefix):
// 	•	En el primer bucle, se recorre el array nums desde el inicio, acumulando el producto de todos los elementos a la izquierda de cada índice.
// 	•	Almacenas este producto acumulado en el array answer.
// 	2.	Array de sufijos (suffix):
// 	•	En el segundo bucle, recorres el array nums desde el final, acumulando el producto de todos los elementos a la derecha de cada índice.
// 	•	Al mismo tiempo, multiplicas el producto acumulado con el valor actual en answer para obtener el producto total excepto el índice actual.
// 	3.	Resultado final:
// 	•	Después de ambos bucles, el array answer contiene los productos requeridos.

// Complejidad

// •	Tiempo:  O(n) , ya que recorremos el array dos veces, una para calcular prefix y otra para calcular suffix.
// •	Espacio adicional:  O(1) , ya que no utilizamos estructuras adicionales (el array answer no cuenta como espacio adicional según el enunciado).
