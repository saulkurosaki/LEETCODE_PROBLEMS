// 209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

//* Solución en O(n): Ventana Deslizante

function minSubArrayLen(target, nums) {
  let n = nums.length;
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    // Mientras la suma sea mayor o igual al target, intenta reducir la ventana
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

//* Explicación:
// 	1.	Variables:
// 	•	left: El inicio de la ventana deslizante.
// 	•	right: El final de la ventana deslizante (controlado por el bucle).
// 	•	sum: La suma actual de los elementos en la ventana.
// 	•	minLength: La longitud mínima de la subarray que cumple la condición.
// 	2.	Bucle principal:
// 	•	Itera con right a través de los índices de nums.
// 	•	Suma el valor actual a sum.
// 	3.	Reducir la ventana:
// 	•	Si sum >= target, intenta reducir la ventana moviendo el puntero left hacia adelante.
// 	•	Actualiza minLength con la longitud actual de la ventana.
// 	•	Resta el elemento en la posición left de sum.
// 	4.	Devolver el resultado:
// 	•	Si minLength no fue actualizado (es decir, no se encontró una subarray válida), devuelve 0.
// 	•	En caso contrario, devuelve minLength.

//* Explicación:
// 	•	Ventana inicial: [2, 3] → suma = 5 (no suficiente).
// 	•	Expande a [2, 3, 1, 2] → suma = 8 (suficiente).
// 	•	Reduce ventana a [3, 1, 2] → suma = 6 (no suficiente).
// 	•	Ventana mínima: [4, 3] → longitud = 2.

//* Solución Alternativa usando Busqueda Binaria: O(n log n)
// Esta solución usa una búsqueda binaria para encontrar el subarray más pequeño.

function minSubArrayLen(target, nums) {
  let n = nums.length;
  let prefixSum = Array(n + 1).fill(0);

  // Construir arreglo de sumas acumuladas
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let minLength = Infinity;

  for (let i = 0; i < n; i++) {
    let toFind = target + prefixSum[i];
    let bound = binarySearch(prefixSum, toFind);
    if (bound !== -1) {
      minLength = Math.min(minLength, bound - i);
    }
  }

  return minLength === Infinity ? 0 : minLength;

  function binarySearch(array, value) {
    let left = 0,
      right = array.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] >= value) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left < array.length ? left : -1;
  }
}

//* Comparación de Complejidad:
// 	1.	Ventana Deslizante: O(n) - Más eficiente y recomendado para este problema.
// 	2.	Búsqueda Binaria: O(n \log n) - Útil para escenarios específicos o si ya tienes un arreglo acumulativo.
