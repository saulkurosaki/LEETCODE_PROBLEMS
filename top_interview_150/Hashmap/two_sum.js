// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function twoSum(nums, target) {
  let numMap = new Map(); // Mapa para almacenar valores e índices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculamos el complemento
    if (numMap.has(complement)) {
      // Si el complemento ya existe, devolvemos los índices
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i); // Guardamos el número y su índice en el mapa
  }

  return [];
}

// Enfoque óptimo O(n) con un HashMap

// Podemos usar un diccionario (hashmap) para almacenar los números que hemos visto hasta ahora y encontrar el complemento en tiempo constante.

//* Explicación:
// 	1.	Creamos un diccionario numMap para almacenar cada número del array junto con su índice.
// 	2.	Recorremos el array nums una sola vez (O(n)).
// 	3.	Para cada número num, calculamos su complemento con target - num.
// 	4.	Si el complemento ya está en numMap, devolvemos los índices correspondientes.
// 	5.	Si no, almacenamos el número actual con su índice en el diccionario.

//* Complejidad:
// O(n) porque recorremos el array solo una vez y cada operación de búsqueda en el mapa es O(1).
