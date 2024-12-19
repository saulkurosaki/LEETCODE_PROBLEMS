// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

function canJump(nums) {
  let maxReach = 0; // Índice más lejano que podemos alcanzar

  for (let i = 0; i < nums.length; i++) {
    // Si no podemos avanzar desde este índice, devolvemos false
    if (i > maxReach) return false;

    // Actualizamos el alcance máximo
    maxReach = Math.max(maxReach, i + nums[i]);

    // Si ya podemos alcanzar o superar el último índice
    if (maxReach >= nums.length - 1) return true;
  }

  return false; // Si salimos del bucle sin alcanzar el último índice
}

// Complejidad

// 	1.	Tiempo: O(n), ya que recorremos el array una sola vez.
// 	2.	Espacio: O(1), solo usamos una variable adicional para rastrear el alcance máximo.
