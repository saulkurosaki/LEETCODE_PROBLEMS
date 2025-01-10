// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

function threeSum(nums) {
  // Ordenar el array
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Evitar duplicados para el primer número
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Evitar duplicados para el segundo y tercer número
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

//* Observaciones clave:
// 	1.	El problema requiere encontrar todas las combinaciones de tres números que sumen cero.
// 	2.	El resultado no debe contener tripletes duplicados.
// 	3.	Podemos ordenar el array y usar el enfoque de dos punteros para reducir la complejidad del tiempo.

//* Enfoque:
// 	1.	Ordenar el array: Ordenamos el array para facilitar el uso de dos punteros y evitar duplicados.
// 	2.	Iterar por cada número: Para cada número  \text{nums[i]} , usamos dos punteros ( \text{left}  y  \text{right} ) para buscar los otros dos números que sumen a  -\text{nums[i]} .
// 	3.	Mover punteros inteligentemente:
// 	•	Si la suma de los tres números es menor que cero, movemos  \text{left}  hacia la derecha.
// 	•	Si es mayor, movemos  \text{right}  hacia la izquierda.
// 	•	Si encontramos una suma de cero, agregamos el triplete al resultado.
// 	4.	Evitar duplicados:
// 	•	Saltamos números repetidos para  \text{nums[i]} ,  \text{nums[left]} , y  \text{nums[right]} .

//* Complejidad:
// 	•	Tiempo: O(n^2) porque iteramos una vez y usamos dos punteros.
// 	•	Espacio: O(1) (sin contar el espacio de la salida).
